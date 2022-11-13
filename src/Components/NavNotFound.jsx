import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/Images';
import { Link } from 'react-router-dom';

function NavNotFound(){
    const styles = {
        navbar: {
           backgroundColor: '#fff059',
        }
    }
    return(
      <Navbar style={styles.navbar} expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
    )
}
export default NavNotFound