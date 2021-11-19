import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown} from "react-bootstrap";
import './Project.css'

class Header extends Component {
    render() {
        return(
            <div className="">
                <Navbar bg="" expand="lg" className="header">
                <Container fluid className="navbar-inner">
                        <Navbar.Brand href="#home" className="navbrand">Project Charity</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-button"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto margin">
                            <Nav.Link href="#home" className="nav-links">Home</Nav.Link>
                            <Nav.Link href="#link" className="nav-links">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-links">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <a href="#" className="donate">DONATE</a>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header