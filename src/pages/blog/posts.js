import drippinCat from '../../images/clairen_drip.png';

const posts =
[
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