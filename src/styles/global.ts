import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.border};
    }
    body {
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.background};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }
`;
