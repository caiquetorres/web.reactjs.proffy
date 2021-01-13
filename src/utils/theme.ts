/**
 * Function that can create the theme object
 * @param themes stores the theme data
 */
export function createThemes<T extends { [themeName: string]: unknown }>(
    themes: T
): T {
    return themes
}
