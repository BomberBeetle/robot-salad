import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import './Navigator.css';

class Navigator extends React.Component{

    render(){
        return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="brand">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Robot Salad logo"
                />
            Robot Salad!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#/blog">Blog</Nav.Link>
                    <Nav.Link href="#/contact">Contact Me</Nav.Link>
                    {/*
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navigator;