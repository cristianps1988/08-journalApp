import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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