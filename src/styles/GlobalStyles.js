import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif
    }

    body{
        background-color: #F0F4F8;
        height: 100vh;
        width: 100%;
    }
`;