import React from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { useTheme } from 'styled-components'

import loginBackground from '../../assets/login-background.svg'
import logo from '../../assets/proffy.svg'

import { ContainerDiv } from './styles'

/**
 * The app's main login page
 */
const Login: React.FC = (): JSX.Element => {
    //#region Hooks

    const theme = useTheme()

    //#endregion

    return (
        //#region JSX

        <ContainerDiv className="app-login" theme={theme}>
            <div className="logo-container">
                <img
                    className="logo-container--background-img"
                    src={loginBackground}
                    alt="Login Background"
                />

                <div className="logo-container--logo">
                    <img src={logo} alt="Logo" />

                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>

            <div className="login-container">
                <div className="login-container--content">
                    <h1>Fazer login</h1>

                    <Input
                        className="login-container--content--app-input-email"
                        label="E-mail"
                    />

                    <Input
                        className="login-container--content--app-input-password"
                        label="Senha"
                        type="password"
                    />

                    <Button className="login-container--content--app-button">
                        Entrar
                    </Button>
                </div>
            </div>
        </ContainerDiv>

        //#endregion
    )
}

Login.displayName = 'Login'

export default Login
