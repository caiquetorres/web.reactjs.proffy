import React, { useState } from 'react'
import { ContainerDiv, LoginDiv, LogoDiv } from './styles'
import { useTheme } from '../../hooks/useTheme'
const Login: React.FC = (): JSX.Element => {
    const { theme, setTheme } = useTheme()

    const [id, setId] = useState(0)

    function onClickedButton(): void {
        setTheme('darkTheme')
    }

    return (
        //#region JSX

        <ContainerDiv>
            <LogoDiv theme={theme} />
            <LoginDiv />
            <button onClick={onClickedButton}>trocar de tema</button>
        </ContainerDiv>

        //#endregion
    )
}

Login.displayName = 'Login'

export default Login
