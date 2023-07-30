import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layouts/AuthLayout'
import { useForm } from '../../hooks'

export const RegisterPage = () => {

    const formData = {
        displayName: '',
        email: '',
        password: ''
    }

    const { displayName, email, password, onInputChange, formState } = useForm(formData)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
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
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" fullWidth>
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
        </AuthLayout>

    )
}