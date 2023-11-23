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
import { TemplateAuthSections } from '../../../componentes/TempleteAuth/index.jsx';
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
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswprd, setShowPasswprd] = useState(false);
    const [open, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState('');
    const [progress, setProgress] = useState(false);

    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    })
    const handleKeyDown = (e) => {
        if (e.KeyCode === 13) {
            submtForum()
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setData((oldData) => {
            const newData = { ...oldData, [name]: value };
            validation({
                name: newData.name,
                surname: newData.lastName,
                email: newData.email,
                password: newData.password,
                setName,
                setSurname,
                setEmail,
                setPassword
            });
            return newData;
        });
    }
    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const submtForum = async (e) => {
        e.preventDefault();
        setProgress(true);
        if (!name && !surname && !email && !password) {
            try {
                setProgress(true);
                const response = await api_users.user.post(data); // Substitua 'data' pelos dados do formulário
                setProgress(false);
            } catch (err) {
                setOpen(true);
                alert(err.message || 'Erro desconhecido ao criar o usuário e vincular o perfil.');
                setProgress(false);
            }
        } else {
            setOpen(true);
            setShowAlert('um dos campos não está corretamente preenchido!');
        }
    };

    return (

        <TemplateAuthSections
            progress={progress}
            open={open}
            showAlert={showAlert}
            handleClose={handleClose}
            title={'Cadastrar'}
            inputs={
                sections?.map((section, index) => {
                    return (
                        <MyTextField
                            key={index}
                            label={section.label}
                            name={section.name}
                            type={section.type}
                            value={data[section.name]}
                            helperText={
                                section.name === 'name' ? name :
                                    section.name === 'lastName' ? surname :
                                        section.name === 'email' ? email :
                                            section.name === 'password' ? password :
                                                null
                            }
                            onChange={
                                handleChange
                            }
                            onKeyDown={handleKeyDown}
                        />
                    );
                })
            }
            buttons={
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Cadastrar
                </Button>
            }
            footer={
                <Grid item xs={12} lg={6} mb={3}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Quero receber inspiração, postes das receitas e atualizações por e-mail."
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            }
        />
    );
}
