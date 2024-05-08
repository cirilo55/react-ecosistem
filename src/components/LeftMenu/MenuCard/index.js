import Container from './styles';
import defaultMenuIcon from '../../../assets/images/icons/defaultmenuicon.svg';
import arrow from '../../../assets/images/icons/triangle.svg';

export default function MenuCard({ children, menuIcon, isColapsed }) {
    return (
        <Container>
            <img className='icon-menu' src={menuIcon ? menuIcon : defaultMenuIcon} alt="icon-menu-card" width='20px'/>
            <div>            
            {children}
            </div>
            <img className='colapse-button' src={arrow} alt="arrow-colapse" width='15px' />
        </Container>
    );
}