import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl as FormControlLabel, Grid, Paper, Stack, Typography } from '@mui/material'
import { Logo } from '../LOGO'
import { Copyright } from '@mui/icons-material'
import { Button } from 'bootstrap'

export const TemplateAuthSections = ({
    progress,
    title,
    inputs,
    buttons,
    footer,
    handleClose,
    showAlert,
    open,
}) => {


    return (
        <>
            {progress &&
                <Stack sx={{ width: '100%', bgcolor: 'green', position: 'fixed', top: 0, left: 0 }}>
                    <LinearProgress sx={{ height: '0.5rem', }} variant='indeterminate' />
                </Stack>
            }
            <Grid
                container
                component="main"
                sx={{ height: '100vh', zIndex: '1', position: 'absolute' }}
            >
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Stack sx={{ m: 1, bgcolor: 'transparent' }}>
                            <Logo />
                        </Stack>
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                        <Grid
                            component="div"
                            noValidate
                            sx={{
                                mt: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            {inputs}
                            {buttons}
                            {footer}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <DialogTitle sx={{ color: 'red' }}>{"Mensagem de erro:"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {showAlert}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}