import styled from 'styled-components'

import { motion } from 'framer-motion'

export const PlaceholderLabel = styled(motion.label)``

export const SelectedDiv = styled(motion.div)``

export const ContainerDiv = styled.div`
    display: flex;
    position: relative;

    height: 4em;

    ${PlaceholderLabel} {
        pointer-events: none;

        display: flex;

        position: absolute;
        left: 1.6rem;
        align-self: center;

        color: ${(props) => props.theme.texts.complements};
        /* font-size: 1rem; */
    }

    input {
        display: flex;

        padding: 0 1.5em;
        padding-top: 1.5em;
        width: 100%;

        outline: none;
        border: 0.15em solid ${(props) => props.theme.back.linesInWhite};

        color: ${(props) => props.theme.texts.base};
    }

    ${SelectedDiv} {
        display: flex;

        position: absolute;
        align-self: center;

        background: ${(props) => props.theme.colors.purple};
        border-radius: 0.1em;

        width: 0.2em;

        transition: 150ms;
    }
`
