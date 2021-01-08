import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from '../contexts/themeContext'

export function useTheme(): ThemeContextProps {
    return useContext(ThemeContext)
}
