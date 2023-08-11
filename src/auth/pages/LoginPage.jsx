import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layouts/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSingIn, startLoginWighEmailPassword } from '../../store/authSlice'
import { useMemo } from 'react'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth)

    const dispatch = useDispatch()


    const { email, password, onInputChange } = useForm(formData)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = e => {
        e.preventDefault()
        dispatch(startLoginWighEmailPassword({ email, password }))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSingIn())
    }

    return (
        <AuthLayout title='Login!'>
            <form
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={onSubmit}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@correo.com"
                            fullWidth
                            name='email'
                            onChange={onInputChange}
                            value={email}
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
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
}
