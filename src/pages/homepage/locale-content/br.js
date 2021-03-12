import ClickySwitch from '../../../components/clicky_switch/ClickySwitch'
import mugshot from '../../../images/handsome_person.jpg';
const content = {

    intro: (<span>
        <h1 style={{marginTop:"30px"}}>Bem-vindo ao Robot Salad!</h1>
        <p>Esse é meu site pessoal, onde eu vou botar um monte de coisa! Primariamente mostrando meu trabalho, mas também com umas idiotices. Também tem uma seção de blog caso você queira se atualizar com as coisas que eu tenho feito!</p>
        <h3>daora, mas quem escreveu isso, exatamente?</h3>
        <p>Ah, <b>muito obrigado por pergutar.</b> Eu sou <b>André Luiz</b>, também conhecido na internet pelos pseudônimos <b>BomberBeetle</b> (no <a href="https://github.com/BomberBeetle">GitHub</a>) e <b>xdre</b> (em tipo todos os outros lugares). Eu venho de São Paulo, Brasil, conhecida como "cidade da garoa" (e também o centro econômico do país).</p>
        <div className="text-center">
            <a href="https://youtu.be/2ocykBzWDiM"><img src={mugshot} className="rounded Mugshot" alt="The author."/></a>
            <p><small>caramba, quem é esse gostosão?</small></p>
        </div>
        <p>Em termos de educação, eu acabei de sair do ensino médio, com um diploma de técnico em informática na ETESP. Eu já provei várias tecnologias diferentes, como node.js, .NET Core, C# geral, Android Studio (com Java), Arduino, HTML/CSS e mais. Se quiser ver meu trabalho, visite meu <a href="#portfolio">portfólio aqui.</a></p>
        </span>),

    switches:(
        <span><h3>Isso tá ficando chato. Eu posso mexer em alguma coisa?</h3>
        <p>tá bom. aqui, um interruptor</p>
        <ClickySwitch toggled={true}/>
        <p>aqui, mais dois:</p>
        <div className="switchHell">
          <ClickySwitch toggled={true}/> 
          <ClickySwitch toggled={false}/>
        </div>
        <p>Se divirta.</p></span>
    ),
    
    ending: (
        <span><h3>Obrigado! Agora oquê?</h3>
        <p>Bem, ainda tem bastante coisa pra fazer aqui! Como eu falei antes, você pode ir pro meu <a href="#portfolio">meu portfólio</a> pra ver minhas invenções, ou você pode visitar <a href="#blog">o blog</a> pra ler minhas besteiras. Aliás se você quiser bater um papo, <a href="#contact">aqui</a> aqui estão alguns lugares que você pode me contatar!</p> </span>
    ),
}

export default content;