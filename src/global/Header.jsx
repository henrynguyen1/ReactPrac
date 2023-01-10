import React from 'react';
import RomanFlag from '../images/1920px-Nova_Roma_Flag.svg.png'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    render() {
       return (
        <><div className='headerImage'>
             <img src={RomanFlag} alt="logo" />
            </div>
            <div className='headerMenu'>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Imperium Romanum</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home" to=''></Nav.Link>
                                    <Nav.Link href="#link">Timeline</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1" to=''>Kingdom</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2" to=''>Republic</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3" to=''>Imperial</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4" to=''>Byzantine</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div></>
        );
    }
}

export default Header;