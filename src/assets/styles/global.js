import { createGlobalStyle } from 'styled-components';
//temas: font-weight: regular 400 
//       font-weight: bold 900
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
    body{
        background: ${({ theme }) => theme.colors.background};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.gray[900]};
        
    }

    button{
        cursor: pointer;
    }

`;