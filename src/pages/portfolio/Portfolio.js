import {Component} from 'react';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import entries from './portfolio_entries';
import PortfolioEntry from '../../components/portfolio_entry/PortfolioEntry'
import './portfolio.css';
import {ThemeContext} from '../../context/theme-context';

class Portfolio extends Component{
render(){
    let theme = this.context.theme;
    let font = this.context.font;
    return(
    <div className="PortfolioRoot" style={theme.background}>
    <Container className="MainContainer" style={theme.content}>
    <Row className="justify-content-center IntroRow" gx={2} style={{fontFamily: font,}}>
        <Col className="text-break IntroContentCol" sm={10}>
            <h1 style={{marginTop: "25px"}}>André Luiz's Portfolio</h1>
            <p>Here you can see some of my <i>finest</i> works! Click on the tags to see other works of mine with the same tag.</p>
            {
                entries.map(entry=>{
                    return(
                    <PortfolioEntry tags={entry.tags} title={entry.title} gh_source={entry.github_source} browse={entry.browse} latest_release={entry.latest_release} img={entry.img} style={theme.cards}>
                        {entry.content}
                    </PortfolioEntry>
                    )
                })
            }

        </Col>
    </Row>
    </Container>
    </div>
    );
}
}
Portfolio.contextType = ThemeContext;

export default Portfolio;