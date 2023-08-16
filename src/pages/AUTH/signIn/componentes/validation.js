export const validateFields = ({ email, password, setShowAlert }) => {
    var regex =
        /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/

    if (
        email === '' ||
        email.indexOf('@') === -1 ||
        email.indexOf('.com') === -1
    ) {
        setShowAlert('Preencha o campo E-MAIL corretamente!')
        setTimeout(() => {
            setShowAlert('')
        }, 3000)
        return false
    }
    if (password.length < 8 || !regex.exec(password)) {
        setShowAlert(
            'A senha deve conter no mínimo 8 caracteres, 1 caractere em maiúsculo, 2 números e 2 caracteres especiais!'
        )
        setTimeout(() => {
            setShowAlert('')
        }, 3000)
        return false
    }
}