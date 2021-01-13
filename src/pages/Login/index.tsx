import React from 'react'

import { useTheme } from '../../hooks/useTheme'

import {
    ContainerDiv,
    LoginContentDiv,
    LoginDiv,
    LoginTitleH1,
    LogoPresentationDiv
} from './styles'

import loginBackground from '../../assets/login-background.svg'
import logo from '../../assets/proffy.svg'

/**
 * The app's main login page
 */
const Login: React.FC = (): JSX.Element => {
    const { theme } = useTheme()

    return (
        //#region JSX

        <ContainerDiv>
            <LogoPresentationDiv theme={theme}>
                <img
                    className="background-img"
                    src={loginBackground}
                    alt="Login Background"
                />
                <div>
                    <img src={logo} alt="Logo" />
                    <span>Sua plataforma de estudos online.</span>
                </div>
            </LogoPresentationDiv>
            <LoginDiv theme={theme}>
                <LoginContentDiv>
                    <LoginTitleH1 theme={theme}>Fazer login</LoginTitleH1>
                </LoginContentDiv>
            </LoginDiv>
        </ContainerDiv>

        //#endregion
    )
}

Login.displayName = 'Login'

export default Login
