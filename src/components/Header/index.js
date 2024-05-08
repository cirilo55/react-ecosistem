import Container from './styles'
import Logo from '../../assets/images/404.svg'
import Profile from './Profile';

import BellIcon from '../../assets/images/icons/Bell.svg'
import SettingsIcon from '../../assets/images/icons/settings.svg'

export default function Header()
{
    return (
        <Container>
            <div className='left-zone'>
                <img src={Logo} alt="Logo-Site" width="40px" height="40px"/>
                <h1>SISTEMA NFE</h1>

            </div>

            <div className='center-zone'></div>


            <div className='right-zone'>
                <div className='vertical-line' />

                <img src={BellIcon} alt="notification-bell" width="15px" height="15px" className='white'/>

                <img src={SettingsIcon} alt="notification-bell" width="15px" height="15px" className='white'/>

                <Profile isLogged={false} />

            </div>
        </Container>
    )
}