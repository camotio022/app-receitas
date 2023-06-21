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
import { IconButton, InputAdornment, Input, Stack, LinearProgress, Alert } from '@mui/material';
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

    const [showalert, setAlert] = useState(false);
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
    const navigate = useNavigate()


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
        if (data?.lastName == "" ||
            data?.lastName < 3) {
            alert("Preencha campo E-MAIL corretamente!");
            setNameFocos(!data?.datasFocos)
            return false;
        }
        if (data?.name == "" ||
            data?.name.length < 4) {
            alert("Preencha campo NOME corretamente!");
            setNameFocos(!datasFocos?.nameFocos);
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
        setProgress(!progress)
        fetch(await api?.user.post(data)).then((res) => {
            console.log(res)
        }).catch((err) => {
            alert(`${err}`)
        })

        setTimeout(() => {
            setProgress(false)
            setAlert(!showalert)
        }, '2000');
        setTimeout(() => {
            setAlert(false)
            return true
        }, '5000');
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Tag.Container component="main" maxWidth="xs" sx={{ padding: '5%' }}>
                {progress && <Stack sx={{ width: '100%', bgcolor: 'green', position: 'fixed', top: 0, left: 0 }}>
                    <LinearProgress sx={{ height: '0.5rem', }} variant='indeterminate' />
                </Stack>}
                {showalert && <Alert severity="success" color="info">
                    Formlário enviando com sucesso.
                </Alert>}
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Stack sx={{ m: 1, bgcolor: (theme) => theme.palette.secondary }}>
                        <Logo />
                    </Stack>
                    <Typography component="h1" variant="h5">
                        Cadastro
                    </Typography>
                    <Box component="form" noValidate onSubmit={submtForum} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <ComponInput
                                    sx={{
                                        bgcolor: !datasFocos?.nameFocos && orange[900], "&::placeholder": {
                                            color: "white",
                                        }
                                    }}
                                    id="outlined-error-helper-text"
                                    helperText="Incorrect entry."
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    label="First Name"
                                    value={data?.name}
                                    onChange={handleChange}
                                    autoFocus={datasFocos?.nameFocos}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ComponInput
                                    sx={{
                                        bgcolor: !datasFocos?.lastNameFocos && orange[900], "&::placeholder": {
                                            color: "white",
                                        }
                                    }}
                                    id="outlined-error-helper-text"
                                    helperText="Incorrect entry."
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={data?.lastName}
                                    onChange={handleChange}
                                    autoFocus={datasFocos?.lastNameFocos}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ComponInput
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
                            </Grid>
                            <Grid item xs={12}>
                                <ComponInput
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
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Quero receber inspiração, postes das receitas e atualizações por e-mail."
                                />
                            </Grid>
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
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Tag.Container>
        </ThemeProvider>
    );
}