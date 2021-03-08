import {Component} from 'react';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import './Contact.css'
import AnchoredCard from '../../components/anchored_card/AnchoredCard'
import { RiDiscordFill, RiTwitterFill, RiGithubFill, RiMailFill } from 'react-icons/ri';
import {ThemeContext} from '../../context/theme-context';
import {LocaleContext, locales} from '../../context/locale-context';

class Contact extends Component{
render() {
    let theme = this.context.theme;
    let font = this.context.font;
    return (
      <div className="ContactRoot" style={theme.background}>
      <Container className="MainContainer">
      <Row className="justify-content-center" gx={2} style={{fontFamily: font,}}>
          <Col className="text-break" sm={10} style={theme.content}>
              <LocaleContext.Consumer>
              {
                    currentLocale => {
                        if(currentLocale===locales.us){
                              console.log(require('./locale-content/us.js').default);
                              return require('./locale-content/us.js').default;
                            }
                            else if(currentLocale===locales.br){
                              console.log(require('./locale-content/br.js').default);
                              return require('./locale-content/br.js').default;
                            }
                    }
              }
              </LocaleContext.Consumer>
              
              <AnchoredCard style={theme.cards}>
                    <RiDiscordFill size="30px"/> xdre#1888
              </AnchoredCard>

              <AnchoredCard href="https://twitter.com/xdre_roa" style={theme.cards}>
                    <RiTwitterFill size="30px"/> @xdre_roa
              </AnchoredCard>

              <AnchoredCard href="https://github.com/BomberBeetle" style={theme.cards}>
                    <RiGithubFill size="30px"/> BomberBeetle
              </AnchoredCard>

              <AnchoredCard href="mailto:gdreks@gmail.com" style={theme.cards}>
                    <RiMailFill size="30px"/> gdreks@gmail.com
              </AnchoredCard>
          </Col>
      </Row>
  </Container>
  </div>
    );
  }
}

Contact.contextType = ThemeContext;
export default Contact;