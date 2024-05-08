import styled from 'styled-components';

export const Container =  styled.div`
    position: fixed;
    height: calc(100% - 1.5rem);
    background: rgb( 200,  200, 200, 0.6);
    cursor: ${({ isOpen }) => (isOpen ? '' : 'pointer')}; 
    width: ${({ isOpen }) => (isOpen ? '248px' : '48px')};
    transition: width 0.3s ease;

    
    &:hover{
        background: rgb( 200,  200, 200, 1);

    }

`
export const MenuHead = styled.div`
    display: flex;
    align-items: center;
    border-bottom: ${({ isOpen }) => (isOpen ? ' 1px solid black' : '')};

    h1{
        font-weight: bolder;
    }
    


`

export const MenuNavigation = styled.div``;
export const MenuCard = styled.div``;

