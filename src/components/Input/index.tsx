import React, { InputHTMLAttributes } from 'react'

/**
 * The app's main input component properties
 */
export type InputProps = InputHTMLAttributes<HTMLDivElement>

/**
 * The app's main input component
 */
const InputTests: React.FC<InputProps> = ({
    ...rest
}: InputProps): JSX.Element => {
    return (
        //#region JSX

        <div {...rest}>
            ola
            <input></input>
        </div>

        //#endregion
    )
}

InputTests.displayName = 'Input'

export default InputTests
