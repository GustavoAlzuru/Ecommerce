import {Nav, Navbar, Form, Button, Container, Dropdown} from 'react-bootstrap';
import Images from '../../Images/Images';
import { Link } from 'react-router-dom';
import React, {useContext, useState} from "react";
import { AuthContext } from '../../Context/AuthContext';
import { SearchItemContext } from '../../Context/SearchItemContext';
import Cart from '../Cart';


function MainNavigation(){
  const [search, setSearch] = useState('')
  const context = useContext(AuthContext)
  const contextItem = useContext(SearchItemContext)

    const styles = { 
        navbar: {
           backgroundColor: '#fff059',
           flexWrap: 'no-wrap',
           position: 'sticky',
           top: '0',
           zIndex: '100'
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
    const handleClick = () => {if(search){contextItem.setBuscador(search)}}
    const enterFunction = (e) => {
      if(e.keyCode === 13 && search){
        handleClick()
      }
    }

    return(
      <>
        <Navbar style={styles.navbar} expand="lg">
            <Container>
            <Navbar.Brand as={Link} to='/'><img src={Images.logo} alt="" /></Navbar.Brand>
            <div style={styles.container}>
              <Form.Control style={styles.searchBar} type="text" placeholder="Search product, brands..." onChange={handleChange} onKeyDown={enterFunction}/>
              <Button style={styles.button} onClick={handleClick}>🔍</Button>
            </div>

            { !context.login && 
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/Signup' style={styles.links}>Sign up</Nav.Link>
                  <Nav.Link as={Link} to='/Login' style={styles.links}>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
            }
            {
              context.login &&
              <>
              <Cart/>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {context.user.name}          
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item>Favorites</Dropdown.Item>
                      <Dropdown.Item>Shopping Cart</Dropdown.Item>
                      <Dropdown.Item onClick={context.handlerLogOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            }
            </Container>
        </Navbar>
      </>
    )
}
export default MainNavigation