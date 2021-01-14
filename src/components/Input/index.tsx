import React, { InputHTMLAttributes } from 'react'

import { ContainerInput } from './styles'

/**
 * The app's main input component properties
 */
export type InputProps = InputHTMLAttributes<HTMLInputElement>

/**
 * The app's main input component
 */
const Input: React.FC<InputProps> = ({ ...rest }: InputProps): JSX.Element => {
    return (
        //#region JSX

        <ContainerInput {...rest}></ContainerInput>

        //#endregion
    )
}

Input.displayName = 'Input'

export default Input
