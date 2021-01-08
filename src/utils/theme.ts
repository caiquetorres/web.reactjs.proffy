import { Theme } from '../themes/types'

export const createThemes = <
    T extends {
        [themeName: string]: Theme
    }
>(
    theme: T
) => theme
