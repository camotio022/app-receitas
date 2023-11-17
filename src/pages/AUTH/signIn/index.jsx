import * as React from 'react'
import Button from '@mui/material/Button'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl as FormControlLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as Tag from './index'
import {
    Input,
    Stack,
    LinearProgress,
    Paper,
} from '@mui/material'
import { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { sections } from './componentes/sections.js'
import { validateFields } from './componentes/validation.js'
import { MyTextField } from '../../../componentes/textField/textField.jsx'
import { Logo } from '../../../componentes/LOGO/index'
import { Facebook, Google, Password } from '@mui/icons-material'
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
export const ComponInput = ({
    id,
    helperText,
    required,
    fullWidth,
    label,
    ...props
}) => {
    return (
        <>
            <Input
                helperText={helperText}
                required={required}
                fullWidth={fullWidth}
                label={label}
                {...props}
            />
        </>
    )
}



export const SignIn = () => {
    const { loginWithGoogle, loginWithEmailAndPassword } =
        useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleLoginWithEmailAndPassword();
        }
      };
    
    const [open, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState('');
    const [progress, setProgress] = useState(false);

    const navigate = useNavigate()
    const [showPasswprd, setShowPasswprd] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData((old) => ({ ...old, [name]: value }))
        validateFields({
            email: data.email,
            password: data.password,
            setShowAlert,
        })
    }
    const handleLoginWithGoogle = () =>
        loginWithGoogle(data?.email, data?.password)
    const handleLoginWithEmailAndPassword = () =>
        loginWithEmailAndPassword(data?.email, data?.password)

    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {progress && <Stack sx={{ width: '100%', bgcolor: 'green', position: 'fixed', top: 0, left: 0 }}>
                <LinearProgress sx={{ height: '0.5rem', }} variant='indeterminate' />
            </Stack>}
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
                            Sign in
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
                            {sections?.map((section, index) => {
                                return (
                                    <MyTextField
                                        key={index}
                                        label={section.label}
                                        name={section.name}
                                        type={section.type}
                                        value={data[section.name]}
                                        helperText={showAlert}
                                        onChange={
                                            handleChange
                                        }
                                        onKeyDown={handleKeyDown}
                                    />
                                );
                            })}
                            {
                                [
                                    {
                                        title: 'login with facebook',
                                        icon: <Facebook />,
                                        color: 'error',
                                        variant: 'outlined',
                                        onclick: false,
                                    },
                                    {
                                        title: 'login with google',
                                        icon: <Google />,
                                        color: 'error',
                                        variant: 'outlined',
                                        onclick: handleLoginWithGoogle,
                                    },
                                    {
                                        title: 'Sign in',
                                        icon: <Password />,
                                        color: 'primary',
                                        variant: 'contained',
                                        onclick: handleLoginWithEmailAndPassword,
                                    }
                                ].map((item, index) => {
                                    return (
                                        <Button
                                            color={item.color}
                                            sx={{ width: '100%', mb: '0.4rem' }}
                                            variant={item.variant}
                                            startIcon={item.icon && item.icon}
                                            onClick={item.onclick && item.onclick}
                                        >
                                            {item.title}
                                        </Button>
                                    )
                                })
                            }
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
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
