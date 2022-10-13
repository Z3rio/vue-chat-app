// IMPORTS
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { setgroups } from "process";
import { onUnmounted, ref, computed } from "vue";
import MessagesVue from "./components/Messages.vue";

// INITIALIZATION
firebase.initializeApp({
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: "chatapp-4fc7f.firebaseapp.com",
  projectId: "chatapp-4fc7f",
  storageBucket: "chatapp-4fc7f.appspot.com",
  messagingSenderId: "1051632986931",
  appId: "1:1051632986931:web:4170789301ec0bc1156c46",
  measurementId: "G-LN0ZGBX83K",
});

// VARIABLES
const firebaseAuth = firebase.auth();

// FIREBASE AUTHENTICATOR
export function getAuth() {
  const user = ref(null);
  const unmount = firebaseAuth.onAuthStateChanged(
    (_user) => (user.value = _user)
  );
  onUnmounted(unmount);

  const isLoggedIn = computed(() => {
    return user.value !== null;
  });

  const signIn = async () => {
    const google = new firebase.auth.GoogleAuthProvider();
    await firebaseAuth.signInWithPopup(google);
  };

  const signOut = () => {
    firebaseAuth.signOut();
  };

  return { signIn, signOut, user, isLoggedIn };
}

// FUNCTIONS
function GenerateUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

// FIRESTORE
const firestore = firebase.firestore();

const messageCol = firestore.collection("messages");
const messageQuery = messageCol.orderBy("createdAt").limit(100);

const groupCol = firestore.collection("groups");
const groupQuery = groupCol.orderBy("name").limit(100);

const focusedGroup = ref("");
const databaseData = ref(undefined);

const messages = ref([]);
const searchValue = ref("");

let unmount2;

export function getGroups() {
  const groups = ref([]);
  const unmount = groupQuery.onSnapshot((snapshot: any) => {
    groups.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    let foundGroup = false;
    groups.value.forEach((group) => {
      if (group.uid == focusedGroup.value) {
        foundGroup = true;
      }
    });

    if (foundGroup == false) {
      focusedGroup.value = "";

      if (unmount2 !== undefined) {
        unmount2();
      }
    }
  });
  onUnmounted(unmount);

  const { user, isLoggedIn } = getAuth();
  const addGroup = (name: string) => {
    if (!isLoggedIn.value) {
      return;
    }

    const { uid } = user.value;

    groupCol.add({
      name: name,
      uid: GenerateUUID(),
      owner: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const removeGroup = async (groupId: string) => {
    let group = groupCol.doc(groupId);
    let groupData = await group.get();
    groupData = groupData.data();

    if (groupData.owner == user.value.uid) {
      let groupMessages = messageCol.where("groupid", "==", groupData.uid);
      let groupMessagesData = await groupMessages.get();
      groupMessagesData.forEach((obj, index) => {
        messageCol.doc(obj.id).delete();
      });

      group.delete();
    }
  };

  const setSearchValue = (newVal: string) => {
    searchValue.value = newVal;
  };

  const setFocusedGroup = (uid: string) => {
    focusedGroup.value = uid;

    if (unmount2 !== undefined) {
      unmount2();
    }
    unmount2 = messageQuery
      .where("groupid", "==", focusedGroup.value)
      .onSnapshot((snapshot: any) => {
        let messageData = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .reverse();
        messageData.forEach((obj, index) => {
          if (obj.createdAt !== null) {
            messageData[index].createdAt = obj.createdAt.toDate();
          }
        });

        messages.value = messageData;
      });

    groupCol
      .where("uid", "==", focusedGroup.value)
      .get()
      .then((obj) => {
        obj.forEach((doc) => {
          databaseData.value = doc.data();
        });
      });

    messageCol
      .where("groupid", "==", focusedGroup.value)
      .get()
      .then((obj) => {
        let messageData = [];
        obj.forEach((doc, index) => {
          let data = doc.data();

          if (data.createdAt !== null) {
            data.createdAt = data.createdAt.toDate();

            messageData.push(data);
          }
        });

        messages.value = messageData;
      });
  };

  return {
    groups,
    focusedGroup,
    searchValue,
    databaseData,

    setSearchValue,
    removeGroup,
    addGroup,
    setFocusedGroup,
  };
}

export function getChat() {
  const { user, isLoggedIn } = getAuth();
  const addMessage = (text: string) => {
    if (!isLoggedIn.value) {
      return;
    }

    const { photoURL, uid, displayName } = user.value;

    messageCol.add({
      username: displayName,
      userid: uid,
      profilepicture: photoURL,
      text: text,
      groupid: focusedGroup.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, addMessage };
}
