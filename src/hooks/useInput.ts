import { useState } from 'react'

/**
 * Interface that has the "useInput" hook return value
 */
interface UseInputResult<T> {
    state: T
    setState: (value: T) => void
    error: string[]
    reset: () => void
}

/**
 * Interface that has the validate value and the error message when some
 * input value is validated with "false"
 */
export interface InputValidator {
    validate: boolean
    message: string
}

/**
 * Hooks that can be used to create some state and validate it with
 * some callbacks
 * @param initialState stores the initial state value
 * @param callbackVl stores all the callbacks that validates this input
 */
export function useInput(
    initialState: string,
    callbackVl?: ((inputValue: string) => InputValidator)[]
): UseInputResult<string> {
    const [state, setState] = useState<string>(initialState)

    return {
        state,
        setState,
        error: (callbackVl ?? [])
            .map((validator) => validator(state))
            .filter((result) => !result.validate)
            .map((value) => value.message),
        reset: () => {
            setState('')
        }
    }
}
