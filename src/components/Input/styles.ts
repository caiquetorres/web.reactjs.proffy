import styled from 'styled-components'

export const ContainerDiv = styled.div`
    display: flex;
    position: relative;

    height: 4em;
`

export const PlaceholderLabel = styled.label`
    pointer-events: none;

    display: flex;

    position: absolute;
    left: 1.6rem;
    align-self: center;

    font-family: Poppins, sans-serif;
    color: ${(props) => props.theme.texts.complements};
    font-size: 1rem;

    transition: 150ms;
`

export const SelectedDiv = styled.div`
    display: flex;

    position: absolute;
    align-self: center;

    background: ${(props) => props.theme.colors.purple};
    border-radius: 0.1em;

    width: 0.2em;
    height: 0em;

    transition: 150ms;
`

export const ContainerInput = styled.input`
    display: flex;

    padding: 0 1.5em;
    padding-top: 1.5em;
    width: 100%;

    outline: none;
    border: 0.15em solid ${(props) => props.theme.back.linesInWhite};

    color: ${(props) => props.theme.texts.base};
    font-family: Poppins, sans-serif;
    font-size: 1rem;

    &:focus {
        & ~ ${PlaceholderLabel} {
            transform: translateY(-1em);
            font-size: 0.8rem;
        }

        & ~ ${SelectedDiv} {
            height: 3em;
        }
    }
`
