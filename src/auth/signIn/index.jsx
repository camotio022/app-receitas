import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl as FormControlLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as Tag from './index'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Logo from '../../images/logo/logo-menu.png'
import {
    IconButton,
    InputAdornment,
    Input,
    Stack,
    LinearProgress,
    Alert,
    Paper,
    Avatar,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useNavigate } from 'react-router-dom'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
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
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()
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

const validateFields = ({ email, password, setShowAlert }) => {
    var regex =
        /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/

    if (
        email === '' ||
        email.indexOf('@') === -1 ||
        email.indexOf('.com') === -1
    ) {
        setShowAlert('Preencha o campo E-MAIL corretamente!')
        setTimeout(() => {
            setShowAlert('')
        }, 3000)
        return false
    }
    if (password.length < 8 || !regex.exec(password)) {
        setShowAlert(
            'A senha deve conter no mínimo 8 caracteres, 1 caractere em maiúsculo, 2 números e 2 caracteres especiais!'
        )
        setTimeout(() => {
            setShowAlert('')
        }, 3000)
        return false
    }
}

export const SignIn = () => {
    const { login, loginWithGoogle, loginWithEmailAndPassword } =
        useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
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
                            <img src={Logo} alt="" />
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
                            <TextField
                                sx={{ m: 1, bgcolor: 'transparent' }}
                                helperText={showAlert}
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={data?.email}
                                onChange={handleChange}
                                id="filled-basic"
                                variant="filled"
                            />
                            <TextField
                                sx={{ m: 1, bgcolor: 'transparent' }}
                                required
                                helperText={showAlert}
                                fullWidth
                                placeholder="Password"
                                name="password"
                                type={showPasswprd ? 'text' : 'password'}
                                value={data?.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                label="password"
                                autoFocus={showAlert}
                                id="filled-basic"
                                variant="filled"
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ShowPassword}
                                        >
                                            {showPasswprd ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox value="remember" color="primary" />
                                }
                                label="Remember me"
                            />
                            <Button
                                color="error"
                                sx={{ width: '100%', mb: '0.4rem' }}
                                variant="outlined"
                                startIcon={<FacebookIcon />}
                            >
                                login with facebook
                            </Button>
                            <Button
                                onClick={handleLoginWithGoogle}
                                color="error"
                                sx={{ width: '100%' }}
                                variant="outlined"
                                startIcon={<GoogleIcon />}
                            >
                                Login with google
                            </Button>
                            <Button
                                onClick={handleLoginWithEmailAndPassword}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
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
