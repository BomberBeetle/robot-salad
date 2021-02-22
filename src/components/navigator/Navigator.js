import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Switch} from '@material-ui/core'
import './Navigator.css';
import {ThemeContext, fonts, themes} from '../../theme-context'

class Navigator extends Component{

    render(){
        let latestFont = this.context.font;
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
                    <Nav.Link as="span" onClick={this.propagationStopper}>Dark Mode<Switch size="small" onClick={(e)=>this.themeSwitchHandler(e, this.props.setTheme)}/></Nav.Link>
                    
                    <NavDropdown rootCloseEvent="none" title="Accessibility" id="basic-nav-dropdown">
                    <NavDropdown.Item as="div" onClick={this.propagationStopper}> <Switch color="primary"checked={latestFont===fonts.dyslexic} onChange={(e)=>{this.dyslexiaSwitchHandler(e, this.props.setFont)}}></Switch>Dyslexic Font</NavDropdown.Item>
                    <NavDropdown.Item as="div" onClick={this.propagationStopper}> <Switch color="primary"></Switch>Larger Font</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }

    dyslexiaSwitchHandler(event, setFont){
        if(event.target.checked){
            setFont(fonts.dyslexic);
        }
        else{
            setFont(fonts.normal);
            console.log("globgabgalab")
        }
    }

    themeSwitchHandler(event, setTheme){
        if(event.target.checked){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
            console.log("globgabgalab")
        }
    }
    

    propagationStopper(event){
        event.nativeEvent.stopImmediatePropagation();
    }
}

Navigator.contextType = ThemeContext;
export default Navigator;