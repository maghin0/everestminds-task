import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBx5ZDZWeCjSBVrwJGWA_FmjKn4zTHQ0U0',
  authDomain: 'everestminds-task.firebaseapp.com',
  databaseURL:
    'https://everestminds-task-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'everestminds-task',
  storageBucket: 'everestminds-task.appspot.com',
  messagingSenderId: '772183598481',
  appId: '1:772183598481:web:3538bad57f00bdacf06630',
  measurementId: 'G-7Z592M3948',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
