import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    color: ${(props)=> props.theme.colors.text} !important;
    background-color: ${(props)=> props.theme.colors.backgroud}!important;  
`;
export const ContainerAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.colors.text} !important;
    background-color: ${(props) => props.theme.colors.backgroud}!important;  
`;