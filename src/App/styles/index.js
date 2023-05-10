import styled from "styled-components";
import {styled as MuiStyled} from '@mui/material'
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.backgroud};  
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

export const ItemLi = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    height: 80%;
    font-size: 12px;
`

export const Card = styled.div`
    padding: 1rem 1rem 0.3rem 1rem;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    `

export const TagReview = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.text};
`
export const TagColors = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.text};
`