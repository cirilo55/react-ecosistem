import Container from './styles';
import NoProfile from '../../../assets/images/no-profile.svg';

export default function Profile({ isLogged }) {
    return (
        <Container>
            {
                isLogged ?
                    <>
                        <img src={NoProfile} alt="no-profile" width="25px" height="25px" />
                        Nome do usuário
                    </>
                    :
                    <>
                        <img src={NoProfile} alt="user-profile" width="25px" height="25px" />
                        Not Logged

                    </>
            }
        </Container>
    );
}
