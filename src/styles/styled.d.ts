import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            anotherPurple: string
            purple: string
            littlePurple: string
            purpleDark: string
            green: string
            anotherGreen: string
            greenDark: string
            delete: string
        }
        back: {
            linesInWhite: string
            hover: string
            background: string
        }
        shapes: {
            disabled: string
        }
        texts: {
            titles: string
            base: string
            complements: string
            inputs: string
        }
        textsInPurple: {
            title: string
            base: string
            complement: string
        }
    }
}
