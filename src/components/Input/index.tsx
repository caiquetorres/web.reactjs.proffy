import React, { InputHTMLAttributes } from 'react'

import { useTheme } from 'styled-components'

import { ContainerInput } from './styles'

/**
 * The app's main input component properties
 */
export type InputProps = InputHTMLAttributes<HTMLInputElement>

/**
 * The app's main input component
 */
const Input: React.FC<InputProps> = ({ ...rest }: InputProps): JSX.Element => {
    //#region Hooks

    const theme = useTheme()

    //#endregion

    return (
        //#region JSX

        <ContainerInput theme={theme} {...rest}></ContainerInput>

        //#endregion
    )
}

Input.displayName = 'Input'

export default Input
