import styled from 'styled-components';

export default styled.header`
    background: linear-gradient(to right, rgb(16, 16, 16) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%); 
    color: white;
    height: 2.5rem;
    width: 100%;
    font-size: x-small;

    display: flex;
    justify-content: center;
    align-items: center;
    
    .left-zone{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;

    h1{
        margin-left: 20px;
    }

    }

    .right-zone {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-left: 20px;
        transition: filter 0.5s; /* Add transition for smooth effect */
    }

    img:hover {
        cursor: pointer;
        color: white;
        filter: invert(100%) brightness(200%) contrast(200%);
        animation: glow 1s ease-in-out infinite alternate; /* Apply glow animation */
    }

    .white {
        filter: invert(100%) brightness(200%) contrast(200%);
    }
    }

    @keyframes glow {
        0% {
            filter: invert(100%) brightness(200%) contrast(200%);
        }
        100% {
            filter: invert(100%) brightness(200%) contrast(200%) drop-shadow(0 0 10px white); /* Add drop shadow for glowing effect */
        }
    }


    .center-zone{
        width: 70%;
        height: 100%;
    }

    .vertical-line{   
    width: 1px;
    background: rgba(255, 255, 255, 0.7);
    height: calc(100% - 10px);
    }


`