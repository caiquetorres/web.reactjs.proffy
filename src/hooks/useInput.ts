import { useState } from 'react'

interface UseInputResult<T> {
    state: T
    setState: (value: T) => void
    error: string[]
    reset: () => void
}

export interface InputValidator {
    validate: boolean
    message: string
}

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
