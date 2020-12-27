import mugshot from './images/handsome_person.jpg';
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <Container>
    <Row className="justify-content-center IntroRow" gx={2}>
        <Col className="text-break IntroContentCol" sm={10}  >
            <h1>Welcome to Robot Salad!</h1>
            <p>This is my personal website, where i'm going to put all sortsa things! Mostly just showing off my work, but also fun experiments, gags and more. There's also a blog section if you want to keep up to date with the latest hijinks I've been up to. </p>
            <h3>cool, but who wrote this, exactly?</h3>
            <p>Oh, <b>I'm so glad you asked.</b> I'm <b>André Luiz</b>, also known on the internet by the pseudonyms <b> BomberBeetle</b> (on <a href="https://github.com/BomberBeetle">GitHub</a>) and <b>xdre</b> (pretty much everywhere else). My pronouns are he/they (but I seriously doubt anyone is going to call me by "they" haha), and I come from São Paulo, Brazil.</p>
            <div class="text-center">
                <img src={mugshot} class="rounded Mugshot" alt="A photo of the author."/>
                <p><small>Whoa mama, who's this handsome devil?</small></p>
            </div>
            <p>In terms of education, I'm fresh outta high school right now, with an additional diploma as a Computing Technician at ETESP. I've dabbled in a somewhat wide range of technologies, like node.js, .NET Core, general C#, Android Studio (with Java), Arduino, HTML/CSS and more. If you want to see my work, you can go to my <a href="portfolio.html">portfolio right here.</a></p>
            <h3>This is getting pretty boring. Can I play  with something?</h3>
            <p>yeah, sure. here's a clicky switch</p>
            
        </Col>
    </Row>
</Container>
  );
}

export default App;
