import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, :root {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background};
    }

`