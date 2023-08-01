import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signinWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result) // sirve para recuperar otros datos
        const { uid, email, displayName, photoURL } = result.user

        return {
            ok: true,
            uid, email, displayName, photoURL
        }

    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user

        // actualizar el displayName en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, displayName, photoURL } = result.user

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut()
}