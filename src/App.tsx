import React from 'react'

import Login from './pages/Login'

/**
 * The app component
 */
const App: React.FC = (): JSX.Element => {
    return (
        //#region JSC

        <Login />

        //#endregion
    )
}

App.displayName = 'App'

export default App
