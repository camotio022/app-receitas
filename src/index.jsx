import './index.css'
import './root_styles/roots.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CallIcon from '@mui/icons-material/Call';


export const App_initialize = () => {
    const openLogin = () => {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    const closeLogin = () => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (
        <div className="container">
            <h2>LOGIN OR REGISTER</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Crie uma conta</h1>
                        <div className="social-container">
                            <a className="social"><FacebookIcon /></a>
                            <a className="social"><GoogleIcon /></a>
                            <a className="social"><CallIcon /></a>
                        </div>
                        <span>Ou use seu email para se cadastrar</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Cadastrar-se</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                        <div className="social-container">
                            <a className="social"><FacebookIcon /></a>
                            <a className="social"><GoogleIcon /></a>
                            <a className="social"><CallIcon /></a>
                        </div>
                        <span>Ou use seus dados para se logar</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Esqueceu sua senha?</a>
                        <button>Login</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Seja bem-vindo!</h1>
                            <p>Para se conecatar com está plataforma, precisa fazer cadastro! </p>
                            <button className="ghost" onClick={closeLogin} id="signIn">Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Let's cook</h1>
                            <p>Para entrar nessa plataforma, favorite e crie suas recitas, vamo?</p>
                            <button className="ghost" onClick={openLogin} id="signUp">Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// const getRecipes = async () => {
//     console.log('primeiro', await api.recipe.get())
//     console.log(await api.recipe.get('jLsVb2WIpVe1ZVOAo9Tq'))
// }
// console.log(<Forms_login />)
// useEffect(() => {
//     getRecipes()
// }, [])