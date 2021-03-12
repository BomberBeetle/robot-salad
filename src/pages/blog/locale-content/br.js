import drippinCat from '../../../images/clairen_drip.png';

export const posts =
[
    {
        title: "DYUERS COLORS!!!",
        subtitle: "Uma segunda mão de pixels",
        date: Date.parse("02/17/2021 15:41"),
        JSXcontent:(<div>
            <p>
                O segundo post! Isso é só uma atualização pra dizer que o site tá levando uma nova mão de tinta pra se parecer menos com um pão pulman!  
            </p>
            <p>
               Honestamente esse não é nem meu esquema de cores favorito, eu nem consegui implementar um azul, mas aqui estamos! 
            </p>
            <iframe width="100%" src="https://www.youtube.com/embed/HguKPVgIZL8" title="DYUERS COLORS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>),
    },

    {
    title: "Primeiro Post",
    subtitle: "Eu fiz isso em uma hiperatividade à meia noite, não me julga.",
    date: Date.parse("02/02/2021 00:15"),
    JSXcontent:(<div>
        <p>
            Então, aqui estamos. Depois do que eu acho que foram meses de procrastinação, energia baixa e pouca motivação, a seção de blog está aberta! Mais ou menos.   
        </p>
        <p>
            Ainda provavelmente tem um monte de coisas pra eu arrumar, incluindo problemas de estilo e eu usar o elemento de Card do Bootstrap pra todas as coisas no site. Mas por agora, eu tô feliz com isso. Enquanto eu não posto coisas mais interessantes, olha essa foto <i>descolaaaada</i>:
        </p>
        <div className="text-center">
                <img src={drippinCat} style={{width: "300px"}} className="rounded" alt="drippin"/>
                <p><small>Sim. Eu rasguei essa estrutura de imagem da página inicial.</small></p>
        </div>
        <p>
           Bem, isso é tudo por hoje. E pro futuro próximo, também. Até mais!
        </p>
    </div>),
    }

]

export const content = []