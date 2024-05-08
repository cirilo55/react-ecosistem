import styled from 'styled-components';

export default styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    .colapse-button {
        margin-left: auto;
        fill: black;
        transform: rotate(180deg);
    }
    .icon-menu{
        margin-right: 10px;
    }

    &:hover{
        background: rgb(200, 220, 250, 1);
        border-radius: 3px;
        
    }
`