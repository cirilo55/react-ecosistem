import styled from 'styled-components';

export const CircleContainer = styled.div`
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 45px; 
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '#ccc')};
    }
`;

export const Group = styled.div`
    display: grid;
    gap: 2px;
    position: relative;
    width: 21px; /* largura das barras */
    
`;

export const Bar = styled.div`

    height: 3px;
    width: 100%; /* Define a largura para ocupar todo o espaço do Group */
    background-color: black;
    border-radius: 5px;
    transition: 0.3s ease;
    
    /* Essa posição centraliza o X */
    position: ${({ isOpen }) => (isOpen ? 'absolute' : '')};
    top: ${({ isOpen }) => (isOpen ? 'translateY(-50%)' : '')};    
    transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%)' : '')};  

    &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:first-child {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
    }
`;
