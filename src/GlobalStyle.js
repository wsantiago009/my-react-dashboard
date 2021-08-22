import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1440px;
        --primaryColor: #171818;
    }

    *, *::after, *::before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    * {
        font-family: 'Open Sans', sans-serif;
        font-weight:400;
        outline: none;
        line-height: 1.4;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }

    body {
        background-color:#d2dbeb;
        margin: 0;
    }

    .container {
        display:block;
        max-width:var(--maxWidth);
        margin:0 auto;
    }

    .dflex {
        display: flex;
        flex-wrap: wrap;
    }
    
    .no-wrap {
        flex-wrap: nowrap;
    }
    
    .dflex-justify-center {
        justify-content: center;
    }
    
    .dflex-justify-space {
        justify-content: space-around;
    }
    
    .dflex-align-center {
        align-items: center;
    }
    
    .list-style {
        list-style: none;
        padding: 0;
    }
    
    .desktop-show {
        display: none;
    }
    
    img {
        width: 100%;
        height: auto;
    }
`;