import {Container, MenuHead, MenuNavigation} from './styles';
import Hamburger from '../Hamburger';
import { useState } from 'react';
import MenuCard from './MenuCard/index'

//esse menu vai fazer as navegações na rotas.
export default function LeftMenu() {
    const [openMenu, setopenMenu] = useState();

    const handleMenu = () => {
        setopenMenu(!openMenu);
    }

    const handleOpenMenu = () => {
        if(!openMenu){
        setopenMenu(true);
        }
    }

    return (
        <Container isOpen={openMenu} onClick={handleOpenMenu}>
            <MenuHead>
            <Hamburger isOpen={openMenu} onClick={handleMenu} />
            {openMenu ? <h1>Algo relevante aqui!</h1>:  ''}
            </MenuHead>

            
            {openMenu ? 
            <MenuNavigation>
                <MenuCard>Home111</MenuCard>
                <MenuCard  submenu={[]}>Cadasto</MenuCard>
                <MenuCard  submenu={[]}>Pedidos de Venda</MenuCard>
            </MenuNavigation>
            : 
            ''
            }
        </Container>
    );
}
