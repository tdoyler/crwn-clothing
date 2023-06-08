import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCnwVCxWBz1gIaAMpnMzzArXd8PMXa_VdA",
	authDomain: "crw-clothing-db-71a9b.firebaseapp.com",
	projectId: "crw-clothing-db-71a9b",
	storageBucket: "crw-clothing-db-71a9b.appspot.com",
	messagingSenderId: "146097576123",
	appId: "1:146097576123:web:347bbdfd35b3279283f19e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};
