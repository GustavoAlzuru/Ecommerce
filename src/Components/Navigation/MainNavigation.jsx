import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../../Images/Images';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import React, {useState} from "react";


function MainNavigation({setBuscador}){
  const [search, setSearch] = useState('')
    const styles = { 
        navbar: {
           backgroundColor: '#fff059',
           flexWrap: 'no-wrap'
        },
        container:{
          width: '100%',
          position: 'relative'
        },
        searchBar: {
            marginRight: '20px',
            width: '100%'
        }, 
        button: {
            backgroundColor: 'transparent',
            position: 'absolute',
            border: 'none',
            right: '5px',
            top: '0px'
        },
        links: {
          width: '5rem'
        }
    }
 
    const handleChange = (e) => setSearch(e.target.value)
    const handleClick = () => {setBuscador(search)}
    const enterFunction = (e) => {
      if(e.keyCode === 13){
        handleClick()
      }
    }

    return(
      <Navbar style={styles.navbar} expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
        <div style={styles.container}>
          <Form.Control style={styles.searchBar} type="text" placeholder="Search product, brands..." onChange={handleChange} onKeyDown={enterFunction}/>
          <Button style={styles.button} onClick={handleClick}>🔍</Button>
        </div>
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
export default MainNavigation