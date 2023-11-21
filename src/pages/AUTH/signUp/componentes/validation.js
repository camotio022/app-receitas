export const validation = ({
    name,
    surname,
    email,
    password,
    setName,
    setSurname,
    setEmail,
    setPassword,
}) => {
    const names = validation_name(name, setName)
    const surnames = validation_surname(surname, setSurname)
    const emailError = validateEmail(email, setEmail);
    const passwordError = validatePassword(password, setPassword);

    return { names, surnames, emailError, passwordError };
};

const validation_name = (name, setName) => {
    if (name === '' || name.length <= 2) {
        return setName('Preencha o campo e-mail corretamente!');
    }
    return setName('');
}
const validateEmail = (email, setEmail) => {
    if (email === '' || email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        return setEmail('Preencha o campo E-MAIL corretamente!');
    }
    return setEmail('');
};
const validation_surname = (surname, setSurname) => {
    if (surname === "" || surname.length < 3) {
        return setSurname('Preencha o campo sobrenome corretamente!');
    }
    return setSurname('');
}
const validatePassword = (password, setPassword) => {
    const regex =
        /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    if (password.length < 8 || !regex.test(password)) {
        return setPassword('A senha deve conter no mínimo 8 caracteres, 1 caractere em maiúsculo, 2 números e 2 caracteres especiais!');
    }
    return setPassword('');
};
