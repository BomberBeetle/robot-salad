import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../logo.svg'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Switch} from '@material-ui/core'
import './Navigator.css';
import {ThemeContext, fonts, themes} from '../../context/theme-context'
import {LocaleContext, locales} from '../../context/locale-context';

class Navigator extends Component{

    render(){
        let latestFont = this.context.font;
        let latestTheme = this.context.theme;
        return(
        <LocaleContext.Consumer>
        {
            currentLocale=>{
                let strings;
                if(currentLocale===locales.us){
                    strings = require('./locale-content/us').default
                }
                else if(currentLocale===locales.br){
                    strings = require('./locale-content/br').default
                }
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
                        <Nav.Link href="#/">{strings.home}</Nav.Link>
                        <Nav.Link href="#/portfolio">{strings.portfolio}</Nav.Link>
                        <Nav.Link href="#/blog">{strings.blog}</Nav.Link>
                        <Nav.Link href="#/contact">{strings.contact}</Nav.Link>
                        <Nav.Link as="span" onClick={this.propagationStopper}>{strings.darkmode}<Switch size="small" onClick={(e)=>this.themeSwitchHandler(e, this.props.setTheme)} checked={latestTheme===themes.dark}/></Nav.Link>
                        
                        <NavDropdown rootCloseEvent="none" title={strings.accessibility} id="basic-nav-dropdown">
                        <NavDropdown.Item as="div" onClick={this.propagationStopper}> <Switch color="primary"checked={latestFont===fonts.dyslexic} onChange={(e)=>{this.dyslexiaSwitchHandler(e, this.props.setFont)}}></Switch>{strings.dyslfont}</NavDropdown.Item>
                        <NavDropdown.Item as="div" onClick={this.propagationStopper}> <Switch color="primary"></Switch>{strings.bigfont}</NavDropdown.Item>
    
                        </NavDropdown>
                        <NavDropdown rootCloseEvent="none" title={strings.locale} id="basic-nav-dropdown">
                        <NavDropdown.Item as="div" onClick={()=>{this.props.setLocale(locales.br)}}>Português</NavDropdown.Item>
                        <NavDropdown.Item as="div" onClick={()=>{this.props.setLocale(locales.us)}}>English</NavDropdown.Item>
    
                </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>)
                ;
            }
        }
        </LocaleContext.Consumer>
        );
    }

    dyslexiaSwitchHandler(event, setFont){
        if(event.target.checked){
            setFont(fonts.dyslexic);
        }
        else{
            setFont(fonts.normal);
        }
    }

    themeSwitchHandler(event, setTheme){
        if(event.target.checked){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    }
    

    propagationStopper(event){
        event.nativeEvent.stopImmediatePropagation();
    }
}

Navigator.contextType = ThemeContext;
export default Navigator;