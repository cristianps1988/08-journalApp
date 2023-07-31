import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layouts/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/authSlice/thunks'

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidation = {
    email: [value => value.includes('@'), 'Correo no válido'],
    password: [value => value.length >= 6, 'La contraseña debe ser mínimo de 6 caractéres'],
    displayName: [value => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formSubmited, setformSubmited] = useState(false)
    const { status, errorMessage } = useSelector(store => store.auth)
    const isAuthenticating = useMemo(() => status === 'checking', [status])
    const { displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidation)


    const onSubmit = (e) => {
        e.preventDefault()
        setformSubmited(true)
        if (!isFormValid) return
        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Login!'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder="Jhon Doe"
                            fullWidth
                            name='displayName'
                            onChange={onInputChange}
                            value={displayName}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@correo.com"
                            fullWidth
                            name='email'
                            onChange={onInputChange}
                            value={email}
                            error={!!emailValid && formSubmited}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name='password'
                            onChange={onInputChange}
                            value={password}
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        {errorMessage && (
                            <Grid item xs={12}>
                                <Alert severity='error'>
                                    {errorMessage}
                                </Alert>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Iniciar Sesión
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout >

    )
}