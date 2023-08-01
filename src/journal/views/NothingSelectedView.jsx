import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "calc(100dvh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item xs={12}>
                <StarOutline sx={{ color: 'white', fontSize: 80 }} />
            </Grid>
            <Grid item sx={12}>
                <Typography color='white' variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}
