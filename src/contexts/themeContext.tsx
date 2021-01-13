import React, { useMemo } from 'react'
import { createContext, useState } from 'react'

import { themes } from '../themes'

type Themes = typeof themes
type KeyOfThemes = keyof Themes
type Theme = Themes[KeyOfThemes]

/**
 * The app's main theme context properties
 */
export interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: KeyOfThemes) => void
}

/**
 * The app's main theme context
 */
export const ThemeContext = createContext<ThemeContextProps>(
    {} as ThemeContextProps
)

/**
 * The app's main theme provider properties
 */
export interface ThemeProviderProps {
    initialTheme: KeyOfThemes
    children: JSX.Element
}

/**
 * The app's main theme provider
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    initialTheme,
    children
}: ThemeProviderProps): JSX.Element => {
    //#region Hooks

    const [themeName, setThemeName] = useState<KeyOfThemes>(initialTheme)

    const theme = useMemo(() => themes[themeName], [themeName])

    //#endregion

    return (
        //#region JSX

        <ThemeContext.Provider
            value={{
                theme,
                setTheme: setThemeName
            }}
        >
            {children}
        </ThemeContext.Provider>

        //#endregion
    )
}

ThemeProvider.displayName = 'ThemeProvider'

export default ThemeProvider
