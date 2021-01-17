/**
 * Function that can validate some e-mail based on it characters
 * @param email stores the emails string
 */
export function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(email)
}

/**
 * Function that can validate the password that the user is passing
 * @param password stores the password string
 */
export function validatePassword(password: string): boolean {
    return password.length >= 6
}
