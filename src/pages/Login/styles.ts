import styled from 'styled-components'

import { Theme } from '../../themes/types'

export const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const LogoPresentationDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: ${(props: { theme: Theme }) => props.theme.colors.purple};

    .background-img {
        position: absolute;
        display: flex;
        width: 75%;
        height: 75%;
    }

    div {
        width: 50%;
        height: 30em;
        z-index: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;

        img {
            width: 100%;
        }

        span {
            font-family: Poppins;
            font-size: 1.5rem;
            color: ${(props: { theme: Theme }) =>
                props.theme.textsInPurple.base};
        }
    }
`

export const LoginDiv = styled.div`
    width: 50%;
    display: flex;
    background: ${(props: { theme: Theme }) => props.theme.back.background};
    justify-content: center;
    align-items: center;
`

export const LoginContentDiv = styled.div`
    height: 25em;
    width: 25em;
`

export const LoginTitleH1 = styled.h1`
    font-family: Poppins;
    color: ${(props: { theme: Theme }) => props.theme.texts.titles};
`
