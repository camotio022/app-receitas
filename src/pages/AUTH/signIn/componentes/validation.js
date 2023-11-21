export const validateFields = ({ email, password, setPassword,
    setEmail }) => {
    const emailError = validateEmail(email, setEmail);
    const passwordError = validatePassword(password, setPassword);

    return { emailError, passwordError };
};

const validateEmail = (email, setEmail) => {
    if (email === '' || email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        return setEmail('Preencha o campo E-MAIL corretamente!');
    }
    return setEmail('');
};

const validatePassword = (password, setPassword) => {
    const regex =
        /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    if (password.length < 8 || !regex.test(password)) {
        return setPassword('A senha deve conter no mínimo 8 caracteres, 1 caractere em maiúsculo, 2 números e 2 caracteres especiais!');
    }
    return setPassword('');
};
