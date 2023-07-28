export const validation = ({
    regex,
    name,
    value,
    data,
    datasFocos,
    setEmailError,
    setNameError,
    setLastNameError,
    setNameFocos,
}) => {
    if (name === 'email') {
        if (value === "" || value.indexOf('@') === -1 || value.indexOf('.com') === -1) {
            setEmailError('Preencha o campo e-mail corretamente!');
            setNameFocos(!data?.datasFocos);
        } else {
            setEmailError('');
        }
    }
    if (name === 'lastName') {
        if (value === "" || value.length < 3) {
            setLastNameError('Preencha o campo sobrenome corretamente!');
            setNameFocos(!data?.datasFocos);
        } else {
            setLastNameError('');
        }
    }
    if (name === 'name') {
        if (value === "" || value.length < 4) {
            setNameError('Preencha o campo nome corretamente!');
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