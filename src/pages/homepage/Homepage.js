import {Component} from 'react';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import './Homepage.css';
import {ThemeContext} from '../../context/theme-context';
import {LocaleContext, locales} from '../../context/locale-context';

class Homepage extends Component{

render() {
  let font = this.context.font;
  let theme = this.context.theme;
  return (
    <div className="HomepageRoot" style={theme.background}>
    <Container>
    <Row className="justify-content-center IntroRow" gx={2} style={theme.content}>
        <Col className="text-break IntroContentCol" sm={10} style={{fontFamily: font,}} >
            <LocaleContext.Consumer>
              {
                currentLocale => {
                  let content;
                  if(currentLocale===locales.us){
                    content = require('./locale-content/us.js').default;
                  }
                  else if(currentLocale===locales.br){
                    content = require('./locale-content/br.js').default;
                  }
                  console.log(content);
                  return (<span>
                    {content.intro}
                    {content.switches}
                    {content.ending}
                  </span>);
                }
              }
            </LocaleContext.Consumer>
        </Col>
    </Row>
</Container>
</div>
  );
}
}

Homepage.contextType = ThemeContext;

export default Homepage;
