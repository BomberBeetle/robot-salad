import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Switch} from '@material-ui/core'
import './Navigator.css';

class Navigator extends React.Component{

    render(){
        return(
        <Navbar className="nav-root" variant="dark" expand="lg">
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
                    
                    <NavDropdown title="Accessibility" id="basic-nav-dropdown">
                    <NavDropdown.Item > <Switch></Switch>Dyslexic Font</NavDropdown.Item>
                    <NavDropdown.Item > <Switch></Switch>Larger Font</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navigator;