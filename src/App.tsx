import React from 'react'
import ThemeProvider from './contexts/themeContext'
import Login from './pages/Login'

function App() {
    return (
        //#region JSC

        <ThemeProvider initialTheme="defaultTheme">
            <Login />
        </ThemeProvider>

        //#endregion
    )
}

export default App
