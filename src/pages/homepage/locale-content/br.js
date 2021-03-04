import ClickySwitch from '../../../components/clicky_switch/ClickySwitch'
import mugshot from '../../../images/handsome_person.jpg';
const content = {

    intro: (<span>
    <h1 style={{marginTop:"30px"}}>Welcome to Robot Salad!</h1>
    <p>CHUPA MINHA PICA</p>
    <h3>cool, but who wrote this, exactly?</h3>
    <p>Oh, <b>I'm so glad you asked.</b> I'm <b>André Luiz</b>, also known on the internet by the pseudonyms <b>BomberBeetle</b> (on <a href="https://github.com/BomberBeetle">GitHub</a>) and <b>xdre</b> (pretty much everywhere else). I come from São Paulo, Brazil, known as the land of the drizzle (and also the economic centre of Brazil).</p>
    <div className="text-center">
        <a href="https://youtu.be/2ocykBzWDiM"><img src={mugshot} className="rounded Mugshot" alt="The author."/></a>
        <p><small>Whoa mama, who's this handsome devil?</small></p>
    </div>
    <p>In terms of education, I'm fresh outta high school right now, with an additional diploma as a Computing Technician at ETESP. I've dabbled in a somewhat wide range of technologies, like node.js, .NET Core, general C#, Android Studio (with Java), Arduino, HTML/CSS and more. If you want to see my work, you can go to my <a href="#portfolio">portfolio right here.</a></p>
    </span>),

    switches:(
        <span><h3>This is getting pretty boring. Can I play  with something?</h3>
        <p>yeah, sure. here's a clicky switch</p>
        <ClickySwitch toggled={true}/>
        <p>In fact, you can have two more:</p>
        <div className="switchHell">
          <ClickySwitch toggled={true}/> 
          <ClickySwitch toggled={false}/>
        </div>
        <p>Have fun.</p></span>
    ),
    
    ending: (
        <span><h3>Thanks! What now?</h3>
        <p>Well, there's still plenty to do here! As I mentioned earlier, you could go to <a href="#portfolio">my portfolio</a> to see some of my machinations, or you could visit the <a href="#blog">blog section</a> to read some of my ramblings. Also, if you want to have a chat, <a href="#contact">here</a> are some places you can hit me up!</p> </span>
    ),
}

export default content;