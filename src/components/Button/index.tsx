import React, { ButtonHTMLAttributes } from 'react'

import { useTheme } from 'styled-components'

import { ContainerButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
    children,
    ...rest
}: ButtonProps): JSX.Element => {
    //#region Hooks

    const theme = useTheme()

    //#endregion

    return (
        //#region JSX

        <ContainerButton theme={theme} {...rest}>
            {children}
        </ContainerButton>

        //#endregion
    )
}

Button.displayName = 'Button'

export default Button
