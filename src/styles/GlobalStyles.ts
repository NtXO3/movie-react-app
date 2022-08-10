import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    };

    html {
        background-color: ${({ theme }: any) => theme.colors.background};
    };
`

export default GlobalStyle;