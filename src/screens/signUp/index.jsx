import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as Tag from './index'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Logo } from '../../componentes/LOGO';
import { IconButton, InputAdornment, Input, Stack, LinearProgress, Alert, Paper, } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { blue, green, grey, orange } from '@mui/material/colors';

import { api } from '../../api';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
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
export const SignUp = () => {
    const [progress, setProgress] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showalert, setShowalert] = useState(false);
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
        var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        const value = e.target.value;
        const name = e.target.name;
        setData((old) => {
            return { ...old, [name]: value };
        });
        if (name === 'email') {
            if (value === "" || value.indexOf('@') === -1 || value.indexOf('.com') === -1) {
                setEmailError('Preencha o campo E-MAIL corretamente!');
                setNameFocos(!data?.datasFocos);
            } else {
                setEmailError('');
            }
        }
        if (name === 'lastName') {
            if (value === "" || value.length < 3) {
                setLastNameError('Preencha o campo SOBRENOME corretamente!');
                setNameFocos(!data?.datasFocos);
            } else {
                setLastNameError('');
            }
        }
        if (name === 'name') {
            if (value === "" || value.length < 4) {
                setNameError('Preencha o campo NOME corretamente!');
                setNameFocos(!datasFocos?.nameFocos);
            } else {
                setNameError('');
            }
        }
        if (name === 'password') {
            if (value.length < 8) {
                setPasswordError('A senha deve conter no mínimo 8 dígitos!');
            } else if (!regex.exec(value)) {
                setPasswordError('A senha deve conter no mínimo 1 caractere em maiúsculo, 2 números e 2 caracteres especiais!');
            } else {
                setPasswordError('')
            }
        };
    }
    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }
    const submtForum = async (e) => {
        e.preventDefault();
        setProgress(!progress)
        fetch(await api?.user.post(data)).then((res) => {
            console.log(res)
        }).catch((err) => {
            alert(`${err}`)
            return
        })
    }
    return (

        <Tag.Container component="main" maxWidth="xs">
            {progress && <Stack sx={{ width: '100%', bgcolor: 'green', position: 'fixed', top: 0, left: 0 }}>
                <LinearProgress sx={{ height: '0.5rem', }} variant='indeterminate' />
            </Stack>}
            {showalert && <Alert severity="success" color="info">
                Formlário enviando com sucesso.
            </Alert>}



            <Grid container component="form" onSubmit={submtForum} spacing={1} fullWidth sx={{ width: '100%', height: '100%' }}>
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
                    padding={4}
                    mb={'auto'}
                    spacing={2}
                    height={"100%"}
                    elevation={2}
                    marginRight={-3}

                    square
                >
                    <Stack sx={{ m: 1, bgcolor: 'transparent' }}>
                        <img src={Logo} alt="" />
                    </Stack>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>



                    <Grid item xs={12} mt={3} mb={3}>
                        <TextField
                            id="outlined-error-helper-text"
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            label="First Name"
                            value={data?.name}
                            onChange={handleChange}
                            autoFocus={datasFocos?.nameFocos}
                            helperText={nameError}
                            sx={{ color: 'red' }}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <TextField
                            id="outlined-error-helper-text"
                            required
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            value={data?.lastName}
                            onChange={handleChange}
                            autoFocus={datasFocos?.lastNameFocos}
                            helperText={lastNameError}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <TextField
                            id="outlined-error-helper-text"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={data?.email}
                            onChange={handleChange}
                            autoFocus={datasFocos?.emailFocos}
                            helperText={emailError}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <TextField
                            required
                            id="outlined-error-helper-text"
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
                            helperText={passwordError}
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
                    </Grid>
                    <Grid item xs={12} lg={6} mb={3}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Quero receber inspiração, postes das receitas e atualizações por e-mail."
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </Tag.Container>
    );
}
