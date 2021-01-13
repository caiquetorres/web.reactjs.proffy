import { useContext } from 'react'

import { ThemeContext, ThemeContextProps } from '../contexts/themeContext'

/**
 * Hooks that is used to get the current applied
 * theme or set another one
 */
export function useTheme(): ThemeContextProps {
    return useContext(ThemeContext)
}
