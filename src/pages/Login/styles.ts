import styled from 'styled-components'

export const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    & .logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        background: ${(props) => props.theme.colors.purple};

        &--background-img {
            position: absolute;
            display: flex;
            height: 75%;
            width: 75%;
        }

        &--logo {
            max-width: 17em;
            width: 62%;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;

            & img {
                max-width: 100%;
            }

            & span {
                font-family: Poppins, sans-serif;
                font-size: 1.2rem;
                color: ${(props) => props.theme.textsInPurple.base};
                max-width: 80%;
            }
        }
    }

    & .login-container {
        height: 50%;
        display: flex;
        background: var(--back-background);
        justify-content: center;
        align-items: center;

        &--content {
            height: 100%;
            width: 100%;
            padding: 1em;

            &--title {
                font-size: 1.75rem;
                font-family: Poppins, sans-serif;
                color: ${(props) => props.theme.texts.titles};
            }

            &--app-button:enabled {
                background: ${(props) => props.theme.colors.green};
                color: #fff;

                &:hover {
                    background: ${(props) => props.theme.colors.greenDark};
                }
            }
        }
    }

    @media (min-width: 1100px) {
        flex-direction: row;

        & .logo-container,
        & .login-container {
            width: 50%;
            height: 100%;
        }

        & .logo-container--logo {
            max-width: none;
            width: 50%;

            & span {
                font-size: 1.5rem;
            }
        }

        & .login-container--content {
            height: 25rem;
            width: 25rem;
            padding: 0em;
        }
    }
`
