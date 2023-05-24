import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as Tag from './index'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../images/logo/logo-menu.png';
import { IconButton, InputAdornment, Input, Stack, LinearProgress, Alert, Paper, Avatar, TextField } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export const ComponInput = ({ id,
    helperText,
    required,
    fullWidth,
    label, ...props }) => {
    return (
        <>
            <Input

                helperText={helperText}
                required={required}
                fullWidth={fullWidth}
                label={label}
                {...props} />
        </>
    )
}
export const SignIn = () => {
    const [progress, setProgress] = useState(false);
    const [showalert, setAlert] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: '',
        email: '',
        lastName: '',
        name: '',
    })
    const [datasFocos, setNameFocos] = useState({
        passwordFocos: false,
        emailFocos: false,
        lastNameFocos: false,
        nameFocos: false,
    })
    const [showPasswprd, setShowPasswprd] = useState(false)
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((old) => {
            return { ...old, [name]: value };
        });
    };

    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }



    const submtForum = async (e) => {
        var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        e.preventDefault();
        if (data?.email == "" ||
            data?.email.indexOf('@') == -1 ||
            data?.email.indexOf('.com') == -1) {
            alert("Preencha campo E-MAIL corretamente!");
            setNameFocos(!data?.datasFocos)
            return false;
        }
        if (data?.password.length < 8) {
            alert("A senha deve conter no minímo 8 digitos!");
            return false;
        } else if (!regex.exec(data?.password)
        ) {
            alert("A senha deve conter no mínimo 1 caracter em maiúsculo, 2 números e 2 caractere especial!");
            return false;
        }



        signInWithEmailAndPassword(auth, data?.email, data?.password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/detailsRecipes")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', zIndex: "1", position: "absolute" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                        <Grid component="form" noValidate onSubmit={submtForum} sx={{
                            mt: 1,
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: '100%'
                        }}>


                            <TextField
                                id="outlined-error-helper-text"
                                helperText="Incorrect entry."
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={data?.email}
                                onChange={handleChange}
                                autoFocus={datasFocos?.emailFocos}
                            />
                            <TextField
                                required
                                id="outlined-error-helper-text"
                                helperText="Incorrect entry."
                                fullWidth
                                defaultValue="Hello World"
                                placeholder="Password"
                                name="password"
                                type={showPasswprd ? 'text' : 'password'}
                                value={data?.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                label="password"
                                autoFocus={datasFocos?.passwordFocos}
                                endAdornment={
                                    <InputAdornment>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ShowPassword}
                                        >
                                            {showPasswprd ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
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
        </ThemeProvider>
    );
}