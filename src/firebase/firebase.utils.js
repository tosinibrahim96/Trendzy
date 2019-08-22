import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPfhxq3iV_zuTz7sPn7IZz_FgUOvfhohY',
  authDomain: 'trendzy-c19ee.firebaseapp.com',
  databaseURL: 'https://trendzy-c19ee.firebaseio.com',
  projectId: 'trendzy-c19ee',
  storageBucket: '',
  messagingSenderId: '428311859652',
  appId: '1:428311859652:web:7af6e7b3caea0247'
};

/**
 * create a new user with info from social authentication
 * check if the user exist by using the uid from userAuth
 * the object returned i.e snapshot has an exist property, so check if it false
 * finally, you can now create
 */
export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  /*
  Note that the userRef here isn't going to the db to fetch data
  it just gives a bunch of info about what we actually want to retrieve
  */

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  /*
  Now, this is where the fetching actually occurs. Notice we have AWAIT here
  since we are going to the backend. The info retrieved is called a snapshot
  */
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      console.log('Profile created successfully');
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
