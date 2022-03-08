import NavHome from '../../components/NavHome/NavHome';
import { Container, DivText  } from './NotFound.style'

function NotFound() {
    return (
        <Container>
            <NavHome/>
            <DivText>
                <p>Votre page n'existe pas .</p>

            </DivText>
            
        </Container>
    )
}

export default NotFound
