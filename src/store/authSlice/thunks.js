import { loginWithEmailPassword, registerUserWithEmailPassword, signinWithGoogle } from "../../firebase/provider"
import { checkingCredential, login, logout } from "./authSlice"

export const checkingAutentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredential())
        const result = await signinWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredential())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWighEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password })

        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, email, displayName, photoURL }))
    }
}