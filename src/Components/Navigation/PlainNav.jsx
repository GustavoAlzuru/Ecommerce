import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../../Images/Images';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Dropdown } from 'react-bootstrap';
import Cart from '../Cart';

function PlainNav(){
    const styles = {
        navbar: {
           backgroundColor: '#fff059',
        }
    }
    const context = useContext(AuthContext)

    return(
      <Navbar style={styles.navbar} expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
        {context.login && 
        <>
        <Cart/>
          <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {context.user.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Favorites</Dropdown.Item>
                <Dropdown.Item onClick={context.handlerLogOut}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </>}
      </Container>
    </Navbar>
    )
}  
export default PlainNav 