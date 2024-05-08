import  {Container, Head} from "./styles";
import dragDot from '../../../assets/images/drag-dots.svg';
import threeDots from '../../../assets/images/three-dots.svg';

export default function BoxHeader() {
    return (
        <Container>
             <img className="drag" src={dragDot} alt="drag-icon"  width="25px" height="25px"/>
             <h1>Titulo Da Box</h1>
             <img className="options" src={threeDots} alt="box-options"  width="20px" height="20px"/>
        </Container>
    );
}