import { useState } from 'react'

export function useToggle(initialState: boolean): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialState)
    return [
        value,
        () => {
            setValue(!value)
        }
    ]
}
