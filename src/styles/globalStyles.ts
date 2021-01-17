import { createGlobalStyle } from 'styled-components'

/**
 * The app's main global styles
 */
export const GlobalStyle = createGlobalStyle`
    :root {
        --default-border-radius: 0.6em;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-size: 16px;
        font-family: Poppins, sans-serif;
    }
`
