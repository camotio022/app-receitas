import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Input, TextField } from '@mui/material';
import { useState } from 'react';
// export const fieldValidationRules = {
//     name: {
//         rule: (nome) => nome.indexOf(" ") !== -1,
//         message:
//             "Nome precisa ser nome completo, não apenas um nome(Ex.: Abimael Neto, não Abimael)",
//     },
//     email: {
//         rule: (email) => email.includes("@") && email.includes(".com"),
//         message: `Email precisa ser um email válido, contendo @ e também .com`,
//     },
//     number: {
//         rule: (number) =>
//             areaCodes.includes(parseInt(number.substring(0, 2))) &&
//             number.length === 11,
//         message: `O telefone deve conter DDD válido e conter 11 caracteres`,
//     },
//     // DUAS REGRAS PARA O INPUT DATA DE NASCIMENTO
//     birth: {
//         rule: (birth) =>
//             birth != undefined,
//         message: `o campo DD não pode ser maior que 31, o campo MM não pode ser maior que 12,O ano não pode ser menor que 1900,O ano não pode ser maior que atual!`,
//     },
//     // TRÊS REGRAS PARA O INPUT PASSWORD
//     password: {
//         rule: (password) =>
//             password.match(/[0-9]/g) &&
//             password.match(/[a-z]/g) &&
//             password.match(/[/@#$?]/g),
//         message: `O campo senha pelo menos um número uma letra minuscula e um símbolo`,
//     },
//     confirmPassword: {
//         rule: (passwordConfirmation, password) => passwordConfirmation === password,
//         message: `A confirmação da senha deve ser igual á senha`,
//     },
// };

export const LoginUp = () => {
    const [data, setData] = useState({
        username: "",
        birth: "",
        phone: "",
        email: "",
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
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Crie uma conta</h1>
                    <div className="social-container">
                        <a className="social"><FacebookIcon /></a>
                        <a className="social"><GoogleIcon /></a>
                    </div>
                    <span>Ou use seu email para se cadastrar</span>
                    <TextField
                        id="outlined-basic"
                        label="Digita seu nome completo"
                        variant="outlined"
                        sx={{
                            mt: '1rem',
                        }}
                        className="inputMui"
                        fullWidth={true}
                        name="username"
                        value={data?.username}
                        onChange={handleChange}
                        type="text" placeholder="Digita seu nome completo"
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Insira seu email"
                        variant="outlined"
                        sx={{
                            mt: '1rem'
                        }}
                        fullWidth={true}
                        name="email"
                        value={data?.email}
                        onChange={handleChange}
                        type="number"
                        placeholder="Insira seu email"
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Digite seu número de celular"
                        variant="outlined"
                        sx={{
                            mt: '1rem'
                        }}
                        fullWidth={true}
                        name="phone"
                        value={data?.phone}
                        onChange={handleChange}
                        type="email"
                        placeholder="Digite seu número de celular"
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Crie uma senha para o acesso"
                        variant="outlined"
                        sx={{
                            mt: '1rem',
                            mb: '1rem'
                        }}
                        fullWidth={true}
                        name="password"
                        value={data?.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Crie uma senha para o acesso"
                        size="small"
                    />
                    <Button variant='contained'>
                        Cadastrar-se
                    </Button>
                </form>
            </div>
        </>
    )
}