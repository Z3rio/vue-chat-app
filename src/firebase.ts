// IMPORTS
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { setgroups } from "process";
import { onUnmounted, ref, computed } from "vue";

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

// FIRESTORE
const firestore = firebase.firestore();
const messageCol = firestore.collection("messages");
const messageQuery = messageCol.orderBy("createdAt").limit(100);

export function getChat() {
  const messages = ref([]);
  const unmount = messageQuery.onSnapshot((snapshot: any) => {
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
  onUnmounted(unmount);

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
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, addMessage };
}
