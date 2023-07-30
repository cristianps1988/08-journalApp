import { createSlice, } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        mail: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid
            state.mail = payload.mail
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated'
            state.uid = null
            state.mail = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = payload.errorMessage || null
        },
        checkingCredential: state => {
            state.status = 'checking'
        }
    }
});
export const { login, logout, checkingCredential } = authSlice.actions;