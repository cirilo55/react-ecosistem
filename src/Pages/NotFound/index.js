import React from "react";
import Container from './styles';
import FourZeroFour from './../../assets/images/404.svg'

export default function NotFound()
{

    return (
    <Container>
        <img src={FourZeroFour} alt="404" width='200px'/>
        <div className="label">
        <h1>Not Found</h1>
        <button><a href='/'> Return to Home</a></button>
        </div>
    </Container> 
    ) 
}