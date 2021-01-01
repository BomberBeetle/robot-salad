import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Navigator from '../../components/navigator/Navigator'
import Col from  'react-bootstrap/Col';

import entries from './portfolio_entries';

import PortfolioEntry from '../../components/portfolio_entry/PortfolioEntry'

function Portfolio(){
    return(
    <div>
    <Navigator/>
    <Container className="MainContainer">
    <Row className="justify-content-center IntroRow" gx={2}>
        <Col className="text-break IntroContentCol" sm={10}>
            <h1>André Luiz's Portfolio</h1>
            <p>Here you can see some of my <i>finest</i> works! Click on the tags to see other works of mine with the same tag.</p>
            {
                entries.map(entry=>{
                    return(
                    <PortfolioEntry tags={entry.tags} title={entry.title} gh_source={entry.github_source} browse={entry.browse} img={entry.img}>
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

export default Portfolio;