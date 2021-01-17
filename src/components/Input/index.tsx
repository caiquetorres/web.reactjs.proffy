import React, { ChangeEvent, InputHTMLAttributes } from 'react'

import { InputValidator, useInput } from '../../hooks/useInput'
import { useToggle } from '../../hooks/useToggle'

import { useTheme } from 'styled-components'

import { ContainerDiv, PlaceholderLabel, SelectedDiv } from './styles'
import { Variants } from 'framer-motion'

/**
 * The input animations duration
 */
const duration = 0.1

/**
 * The input label animation
 */
const labelVariants: Variants = {
    focused: {
        fontSize: '12px',
        y: -10
    },
    blured: {
        fontSize: '16px',
        y: 0
    }
}

/**
 * The selected div animation
 */
const selectedVariants: Variants = {
    focused: {
        height: '3em'
    },
    blured: {
        height: '0em'
    }
}

/**
 * The app's main input component properties
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    validators?: ((inputValue: string) => InputValidator)[]
}

/**
 * The app's main input component
 */
const Input: React.FC<InputProps> = ({
    label,
    validators,
    ...rest
}: InputProps): JSX.Element => {
    //#region Hooks

    const theme = useTheme()

    const { state: text, setState: setText } = useInput('', validators)
    const [focused, toggle] = useToggle(false)

    //#endregion

    //#region Functions

    /**
     * Function that handles the "onChange" state of the input
     * @param event stores the change input event
     */
    function handleOnTextChanged(event: ChangeEvent<HTMLInputElement>): void {
        setText(event.target.value)
    }

    //#endregion

    return (
        //#region JSX

        <ContainerDiv theme={theme}>
            <PlaceholderLabel
                animate={focused || text ? 'focused' : 'blured'}
                variants={labelVariants}
                transition={{ duration }}
            >
                {label}
            </PlaceholderLabel>
            <input
                onFocus={toggle}
                onBlur={toggle}
                onChange={handleOnTextChanged}
                {...rest}
            />
            <SelectedDiv
                animate={focused || text ? 'focused' : 'blured'}
                variants={selectedVariants}
                transition={{ duration }}
            />
        </ContainerDiv>

        //#endregion
    )
}

Input.displayName = 'Input'

export default Input
