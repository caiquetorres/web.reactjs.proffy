import React from 'react'

import loginBackground from '../../assets/login-background.svg'
import logo from '../../assets/proffy.svg'

import './styles.scss'

/**
 * The app's main login page
 */
const Login: React.FC = (): JSX.Element => {
    return (
        //#region JSX

        <div className="container">
            <div className="container--logo-container">
                <img
                    className="container--logo-container--background-img"
                    src={loginBackground}
                    alt="Login Background"
                />
                <div className="container--logo-container--logo">
                    <img src={logo} alt="Logo" />
                    <span>Sua plataforma de estudos online.</span>
                </div>
            </div>
            <div className="container--login-container">
                <div className="container--login-container--content">
                    <h1 className="container--login-container--content--title">
                        Fazer login
                    </h1>
                </div>
            </div>
        </div>

        //#endregion
    )
}

Login.displayName = 'Login'

export default Login
