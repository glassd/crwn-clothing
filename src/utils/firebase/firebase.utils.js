// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want too use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW2NJ5WjxA_RWjm8OiaYHN26AhawAoyuE",
    authDomain: "crown-clothing-db-30286.firebaseapp.com",
    projectId: "crown-clothing-db-30286",
    storageBucket: "crown-clothing-db-30286.appspot.com",
    messagingSenderId: "1013454767193",
    appId: "1:1013454767193:web:f7cde1d988e1099ef75d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}