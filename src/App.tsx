import React from 'react'

import { ThemeProvider } from 'styled-components'

import Login from './pages/Login'
import { GlobalStyle } from './themes/globalStyles'
import { defaultTheme } from './themes/theme'

/**
 * The app component
 */
const App: React.FC = (): JSX.Element => {
    return (
        //#region JSC

        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Login />
        </ThemeProvider>

        //#endregion
    )
}

App.displayName = 'App'

export default App
