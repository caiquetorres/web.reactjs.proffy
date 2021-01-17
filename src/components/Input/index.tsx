import React, { InputHTMLAttributes, useState } from 'react'

import { useToggle } from '../../hooks/useToggle'

import { useTheme } from 'styled-components'

import {
    ContainerDiv,
    ContainerInput,
    PlaceholderLabel,
    SelectedDiv
} from './styles'

/**
 * The app's main input component properties
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

/**
 * The app's main input component
 */
const Input: React.FC<InputProps> = ({
    label,
    ...rest
}: InputProps): JSX.Element => {
    //#region Hooks

    const theme = useTheme()

    const [focused, toggle] = useToggle(false)

    //#endregion

    return (
        //#region JSX

        <ContainerDiv>
            <PlaceholderLabel>{label}</PlaceholderLabel>
            <ContainerInput theme={theme} onFocus={toggle} {...rest} />
            <SelectedDiv />
        </ContainerDiv>

        //#endregion
    )
}

Input.displayName = 'Input'

export default Input
