import { signinWithGoogle } from "../../firebase/provider"
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