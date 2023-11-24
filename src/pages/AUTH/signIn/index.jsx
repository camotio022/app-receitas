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
import { Facebook, Google, Password } from '@mui/icons-material'
import { TemplateAuthSections } from '../../../componentes/TempleteAuth/index.jsx'
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        setData((oldData) => {
            const newData = { ...oldData, [name]: value };
            validateFields({
                email: newData.email,
                password: newData.password,
                setPassword,
                setEmail
            });
            return newData;
        });
    }
    const handleLoginWithGoogle = () =>
        loginWithGoogle(data?.email, data?.password);
    const handleLoginWithEmailAndPassword = () => {
        if (!email && !password) {
            loginWithEmailAndPassword(data?.email, data?.password)
        } else {
            setOpen(true)
            setShowAlert('um dos campos não está corretamente preenchido!')
        }
    }

    const ShowPassword = () => {
        setShowPasswprd(!showPasswprd)
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <TemplateAuthSections
            progress={progress}
            open={open}
            showAlert={showAlert}
            handleClose={handleClose}
            title={'Login'}
            inputs={
                sections?.map((section, index) => {
                    return (
                        <MyTextField
                            key={index}
                            label={section.label}
                            name={section.name}
                            type={section.type}
                            value={data[section.name]}
                            helperText={section.name === 'email' ? email : password}
                            onChange={
                                handleChange
                            }
                            onKeyDown={handleKeyDown}
                        />
                    );
                })
            }
            buttons={
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
            footer={
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
            }
        />
    )
}
