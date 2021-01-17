import styled from 'styled-components'

export const ContainerButton = styled.button`
    border: none;
    outline: none;

    width: 100%;
    padding: 1.5em 0;
    border-radius: var(--default-border-radius);

    font-family: Archivo, sans-serif;
    font-weight: 600;
    font-size: 1rem;

    transition: background 200ms;

    cursor: pointer;

    &:disabled {
        background: ${(props) => props.theme.shapes.disabled};
        color: ${(props) => props.theme.texts.complements};
    }
`
