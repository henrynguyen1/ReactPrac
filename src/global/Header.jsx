import React from "react";
import RomanFlag from "../images/1920px-Nova_Roma_Flag.svg.png";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="headerImage">
          <img src={RomanFlag} alt="logo" />
        </div>
        <div className="headerMenu">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Imperium Romanum</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#link">Timeline</Nav.Link>
                  <NavDropdown title="Roman Timelines" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      <Nav.Link to="/kingdom">Kingdom</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Nav.Link to="/republic">Republic</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Nav.Link to="/imperial">Imperial</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      <Nav.Link to="/byzantine">Byzantine</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link to="/link">Store</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default Header;
