import './index.css'
import './root_styles/roots.css'

import { LoginUp } from './componentes/CADASTRO';
import { LoginIn } from './componentes/LOGIN.jsx';


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
               <LoginUp/>
                <LoginIn/>
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