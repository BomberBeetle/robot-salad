import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Navigator from '../../components/navigator/Navigator'
import Col from  'react-bootstrap/Col';
import './Contact.css'
import AnchoredCard from '../../components/anchored_card/AnchoredCard'
import { RiDiscordFill, RiTwitterFill, RiGithubFill, RiMailFill } from 'react-icons/ri';

function Contact() {
    return (
      <div>
      <Navigator/>
      <Container className="MainContainer">
      <Row className="justify-content-center" gx={2}>
          <Col className="text-break" sm={10} >
              <h3>Contact Me</h3>
              <p>In this page, you can find some places you can hit me up.</p>
              
              <AnchoredCard>
                    <RiDiscordFill size="30px"/> xdre#1888
              </AnchoredCard>

              <AnchoredCard href="https://twitter.com/xdre_roa">
                    <RiTwitterFill size="30px"/> @xdre_roa
              </AnchoredCard>

              <AnchoredCard href="https://github.com/BomberBeetle">
                    <RiGithubFill size="30px"/> BomberBeetle
              </AnchoredCard>

              <AnchoredCard href="mailto:gdreks@gmail.com">
                    <RiMailFill size="30px"/> gdreks@gmail.com
              </AnchoredCard>
          </Col>
      </Row>
  </Container>
  </div>
    );
  }
  
  export default Contact;