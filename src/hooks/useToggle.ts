import { useState } from 'react'

/**
 * Hook that toggles some value
 * @param initialState stores the initial toggle value
 */
export function useToggle(initialState: boolean): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialState)
    return [
        value,
        () => {
            setValue(!value)
        }
    ]
}
