import styled from 'styled-components'

export const ContainerInput = styled.input`
    padding: 1.25em 1.5em;
    border: 0.15em solid ${(props) => props.theme.back.linesInWhite};
    color: ${(props) => props.theme.texts.base};
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    outline: none;

    &::-webkit-input-placeholder {
        color: ${(props) => props.theme.texts.complements};
        font-family: Poppins, sans-serif;
        font-size: 1rem;
    }
`
