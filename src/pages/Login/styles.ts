import styled from 'styled-components'
import { Theme } from '../../themes/types'

export const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const LogoDiv = styled.div`
    width: 50%;
    background: ${(props: { theme: Theme }) => props.theme.colors.purple};
`

export const LoginDiv = styled.div`
    width: 50%;
    display: flex;
`
