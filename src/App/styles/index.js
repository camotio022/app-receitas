import styled from "styled-components";
import { styled as MuiStyled } from '@mui/material'
export const Container = styled.div`
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.text};  
`;

// export const Container = MuiStyled('div')({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '90%',
//     height: '100%',
//     color: (props) => props.theme.colors.text,
//     backgroundColor: (props) => props.theme.colors.backgroud
// })

export const ContainerAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};  
`;

export const Tag = styled.div`
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.text};
`
