import * as React from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as Tag from './index'
import { Logo } from '../../../componentes/LOGO/index';
import { Stack, LinearProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper, Box, } from '@mui/material';
import { useState } from 'react';
import { validation } from './componentes/validation';
import { sections } from './componentes/sections';
import { MyTextField } from '../../../componentes/textField/textField.jsx';
import { api_users } from '../../../api/users/users';
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
export const SignUp = () => {
    const [emailError, setEmailError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [showPasswprd, setShowPasswprd] = useState(false)
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [open, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState('');
    const [progress, setProgress] = useState(false);

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

    const handleKeyDown = (e) => {
        if (e.KeyCode === 13) {
            submtForum()
        }
    }
    const handleChange = (e) => {
        var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        const value = e.target.value;
        const name = e.target.name;
        setData((old) => {
            return { ...old, [name]: value };
        });
        validation({
            regex,
            name,
            value,
            data,
            datasFocos,
            setEmailError,
            setNameError,
            setLastNameError,
            setNameFocos,
        })
    }
    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const submtForum = async (e) => {
        const isAnyFieldFilled = Object.values(datasFocos).some((value) => value !== false);

        e.preventDefault();
        setProgress(true);
        if (isAnyFieldFilled) {
            setShowAlert('Um dos campos não está preenchido, por favor preencha.');
            setProgress(true);
            return
        }
        if (data.password.length < 6) {
            setProgress(false);
            setShowAlert('A senha deve ter pelo menos 6 caracteres.');
            setOpen(true);
            return;
        }
        try {
            setProgress(true);
            const response = await api_users.user.post(data); // Substitua 'data' pelos dados do formulário
            setProgress(false);
        } catch (err) {
            setShowAlert(err.message || 'Erro desconhecido ao criar o usuário e vincular o perfil.');
            setOpen(true);
            setProgress(false);
        }
    };

    return (

        <>
            <Tag.Container component="main" maxWidth="xs">
                {progress && <Stack sx={{ width: '100%', bgcolor: 'green', position: 'fixed', top: 0, left: 0 }}>
                    <LinearProgress sx={{ height: '0.5rem', }} variant='indeterminate' />
                </Stack>}
                <Grid container component="form" onSubmit={submtForum}
                    sx={{ height: '100vh', zIndex: '1', position: 'absolute' }}>
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
                                Sign up
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
                        </Box>
                    </Grid>
                </Grid>
            </Tag.Container>
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
    );
}
