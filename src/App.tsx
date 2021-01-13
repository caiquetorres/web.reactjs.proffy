import React from 'react'

import ThemeProvider from './contexts/themeContext'

import Login from './pages/Login'

/**
 * The app component
 */
const App: React.FC = (): JSX.Element => {
    return (
        //#region JSC

        <ThemeProvider initialTheme="defaultTheme">
            <Login />
        </ThemeProvider>

        //#endregion
    )
}

App.displayName = 'App'

export default App
