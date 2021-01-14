import React from 'react'

import { ThemeProvider } from 'styled-components'

import Login from './pages/Login'
import { GlobalStyle } from './styles/globalStyles'
import { light } from './styles/themes/light'

/**
 * The app component
 */
const App: React.FC = (): JSX.Element => {
    return (
        //#region JSC

        <ThemeProvider theme={light}>
            <GlobalStyle />
            <Login />
        </ThemeProvider>

        //#endregion
    )
}

App.displayName = 'App'

export default App
