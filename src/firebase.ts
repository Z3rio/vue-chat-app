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
