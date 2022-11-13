import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/Images';
import { Link } from 'react-router-dom';

function NavigationOther(){
    const styles = {
        navbar: {
           backgroundColor: '#fff059',
           flexWrap: 'no-wrap',
           height: '300px',
           position: 'relative',
           zIndex: '5'
        }
    }
    return(
      <div style={styles.navbar}>
        <Navbar  expand="lg">
          <Container>
            <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    )
}
export default NavigationOther