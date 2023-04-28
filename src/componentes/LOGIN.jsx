import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CallIcon from '@mui/icons-material/Call';
import { Button, TextField } from '@mui/material';

import { useState } from 'react';
export const LoginIn = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        
    });
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((old) => {
            return { ...old, [name]: value };
        });
    };
    return (
        <>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="social-container">
                        <a className="social"><FacebookIcon /></a>
                        <a className="social"><GoogleIcon /></a>
                        <a className="social"><CallIcon /></a>
                    </div>
                    <span>Ou use seus dados para se logar</span>
                    <TextField
                        id="outlined-basic"
                        label="Digita seu email cadatrado"
                        variant="outlined"
                        sx={{
                            mt: '1rem',
                        }}
                        className="inputMui"
                        fullWidth={true}
                        name="username"
                        value={data?.username}
                        onChange={handleChange}
                        type="text" placeholder="Digita seu email cadatrado"
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Insira sua senha"
                        variant="outlined"
                        sx={{
                            mt: '1rem'
                        }}
                        fullWidth={true}
                        name="email"
                        value={data?.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Insira sua senha"
                        size="small"
                    />
                    <a href="#">Esqueceu sua senha?</a>
                    <Button variant='contained'>Cadastrar-se</Button>
                </form>
            </div>
        </>
    )
}