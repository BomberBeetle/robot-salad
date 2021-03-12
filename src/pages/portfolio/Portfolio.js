import {Component} from 'react';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import PortfolioEntry from '../../components/portfolio_entry/PortfolioEntry'
import './portfolio.css';
import {ThemeContext} from '../../context/theme-context';
import {LocaleContext, locales} from '../../context/locale-context';

class Portfolio extends Component{
render(){
    let theme = this.context.theme;
    let font = this.context.font;
    return(
    <div className="PortfolioRoot" style={theme.background}>
    <Container className="MainContainer" style={theme.content}>
    <Row className="justify-content-center IntroRow" gx={2} style={{fontFamily: font,}}>
        <Col className="text-break IntroContentCol" sm={10}>
            <LocaleContext.Consumer>
            {
            currentLocale => {
            var content;
            var entries;
            if(currentLocale===locales.us){
                content = require('./locale-content/us').content;
                entries = require('./locale-content/us').entries;
            }
            else if(currentLocale===locales.br){
                content = require('./locale-content/br').content;
                entries = require('./locale-content/br').entries;
            }
            return(
            <span>
            {content}
            {
                entries.map(entry=>{
                    return(
                    <PortfolioEntry tags={entry.tags} title={entry.title} gh_source={entry.github_source} browse={entry.browse} latest_release={entry.latest_release} img={entry.img} style={theme.cards}>
                        {entry.content}
                    </PortfolioEntry>
                    )
                })
            }
            </span>
            )
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
Portfolio.contextType = ThemeContext;

export default Portfolio;