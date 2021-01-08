import React, { useEffect, useMemo } from 'react'

import { createContext, useState } from 'react'
import { themes } from '../themes'
import { Theme } from '../themes/types'

type Themes = keyof typeof themes

export interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Themes) => void
}

export const ThemeContext = createContext<ThemeContextProps>(
    {} as ThemeContextProps
)

export interface ThemeProviderProps {
    initialTheme: Themes
    children: JSX.Element
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    initialTheme,
    children
}: ThemeProviderProps): JSX.Element => {
    //#region Hooks

    const [themeName, setThemeName] = useState<Themes>(initialTheme)

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
