import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyAda5d8ai-RtofdoliaIIdKgJUHrnUq7w4",
    authDomain: "crwn-db-5a11b.firebaseapp.com",
    projectId: "crwn-db-5a11b",
    storageBucket: "crwn-db-5a11b.appspot.com",
    messagingSenderId: "209478771673",
    appId: "1:209478771673:web:8af2fb35128b81b1c46fc8",
    measurementId: "G-8ZJV5ZCRQB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdDate = new Date();
        try {
            await userRef.set({displayName, email, createdDate, ...additionalData});
        }
        catch(error){
            console.log('error creating user',  error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = (event) => {event.preventDefault(); auth.signInWithPopup(provider);}

export default firebase;