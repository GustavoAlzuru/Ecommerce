import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/Images';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navigation(){
    const styles = {
        navbar: {
           backgroundColor: '#fff059',
           flexWrap: 'no-wrap' 
        },
        searchBar: {
            marginRight: '20px',
            width: '100%'
        },
        button: {
            backgroundColor: 'transparent',
            marginLeft: '-65px',
            border: 'none'
        },
        links: {
          width: '5rem'
        }
    }
    return(
      <Navbar style={styles.navbar} expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
        <Form.Control style={styles.searchBar} type="password" placeholder="Search product, brands..."/>
        <Button style={styles.button}>🔍</Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Signup' style={styles.links}>Sign up</Nav.Link>
            <Nav.Link as={Link} to='/Login' style={styles.links}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navigation