import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlNg9eT0HZYV-f1QMxIfmkB6Z76MSJpsU",
  authDomain: "crown-db-4ae89.firebaseapp.com",
  projectId: "crown-db-4ae89",
  storageBucket: "crown-db-4ae89.appspot.com",
  messagingSenderId: "386378836864",
  appId: "1:386378836864:web:cffb56e27827970dcb6f65",
  measurementId: "G-JEQJ28JMQR",
};

export const createUserrofileDocument = async (userAth, additionalData) => {
  if (!userAth) return;
  const userRef = firestore.doc(`users/${userAth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
