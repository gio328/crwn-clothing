import firebase from 'firebase/compat/app'; //pulling in firebase utility library
import 'firebase/compat/firestore'; //for database
import 'firebase/compat/auth'; //for authentication
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBQP7ggfC989O4_Qx7ymc60CNLs6VdqPL8",
    authDomain: "crwn-db-5f4fb.firebaseapp.com",
    projectId: "crwn-db-5f4fb",
    storageBucket: "crwn-db-5f4fb.appspot.com",
    messagingSenderId: "637799351336",
    appId: "1:637799351336:web:0684725309d98ed02d211d",
    measurementId: "G-ELW9CZ18Q0"
};
firebase.initializeApp(config);

export const db = getFirestore();

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt =  new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;//this is used to check if database is updated with any new data
} 


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();//gives access to auth googleAuthProvider class from authentication library
provider.setCustomParameters({prompt: 'select_account'});//trigger auth pop up whenever we use this googleAuthProvider for authentication and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);//takes provider that we made. It can take multiple pop up(facebook,twitter) but we need the google pop up
export default firebase; //incase the whole libarry is needed
