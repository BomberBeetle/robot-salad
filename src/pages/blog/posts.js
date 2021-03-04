import drippinCat from '../../images/clairen_drip.png';

const posts =
[
    {
        title: "DYUERS COLORS!!!",
        subtitle: "A fresh coat of pixels",
        date: Date.parse("02/17/2021 15:41"),
        JSXcontent:(<div>q
            <p>
                The second blog post! This is just a little update to say that the website is now getting some colors (with an "u" if you are British) and a new logo, so it looks less like a plain piece of bread!  
            </p>
            <p>
                To be honest this isn't even my favorite color scheme, I didn't even manage to implement some blue, but here we are! 
            </p>
            <iframe width="100%" src="https://www.youtube.com/embed/uxXFRt4BmBI" title="DYUERS COLORS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>),
    },

    {
    title: "First Post",
    subtitle: "I made this on a 12AM power spike, don't judge me.",
    date: Date.parse("02/02/2021 00:15"),
    JSXcontent:(<div>
        <p>
            So, here we are. After what felt like months of stalling, low energy and poor motivation, the blog section is finally up! Sort of, anyways.   
        </p>
        <p>
            There's probably still a bunch of things to iron out, including issues of styling and me using the damn Bootstrap Card element for every single thing in this goddamn website. But for now, I'm happy with this. While I don't post more interesting stuff, check out this <i>coool</i> picture:
        </p>
        <div className="text-center">
                <img src={drippinCat} style={{width: "300px"}} className="rounded" alt="drippin"/>
                <p><small>Yes. I did rip off this image structure right off the homepage.</small></p>
        </div>
        <p>
            Well, that's all for today. And the forseeable future, for that matter. Smell ya later, chumps!
        </p>
    </div>),
    }

]
export default posts;