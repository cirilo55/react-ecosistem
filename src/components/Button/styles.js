import styled, { css } from "styled-components";

export const StyledButton =  styled.button`
    height: 52px;
    border: none;
    background: ${ ({ theme }) => theme.colors.primary.main };
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.4);
    transition: background 0.2 ease-in;
    padding: 0 16px;
    border-radius: 4px;
    
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        background: ${ ({ theme }) => theme.colors.primary.light };

    }

    &:active {
        background: ${ ({ theme }) => theme.colors.primary.dark}
    }

    &[disabled] {
        background: #ccc;
        cursor: default;
    }

    ${({theme, danger}) => danger && css`
        background: ${theme.colors.danger.main};

        &:hover{
            background: ${theme.colors.danger.light};

         }

        &:active {
            background: ${theme.colors.danger.dark};
        }
    `}

`