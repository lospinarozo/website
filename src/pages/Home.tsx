import {Avatar, AvatarFallback, AvatarImage} from "#components/ui/avatar";
import avatarPicture from "../assets/avatar.jpg?w=100;200;400&format=webp;jpg&as=picture&imagetools"

function Home() {
    return (
        <>
            <div className="typeset pb-6">
                <blockquote className="text-xl italic">"The animal looks at us, and we
                    are naked before
                    it. Thinking perhaps
                    begins there."
                </blockquote>
                <p className="text-right text-primary">The Animal That Therefore I Am<br/>Jacques
                    Derrida</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-[auto_1fr]">
                <Avatar className="w-60 h-60 justify-self-center md:w-72 md:h-72 md:self-center md:justify-self-start">
                    <AvatarImage srcSet={avatarPicture.sources.webp} sizes=""/>
                    <AvatarFallback>LO</AvatarFallback>
                </Avatar>
                <div className="typeset">
                    <h1>Who am I</h1>
                    <p>I am a cross-disciplinary researcher investigating how biological structures manipulate light and
                        using the optical principles perfected by millions of years of evolution to expand the design
                        strategies of technological devices to control light.
                    </p>
                    <p>I am fascinated by how much effort it takes us humans to understand what comes so naturally to a
                        bug.
                        We use advanced microscopes, sophisticated algorithms and artificial intelligence; we solve
                        equations, mix reagents and explore intricate geometries. All to understand how a tiny insect
                        produces a flash of colour.</p>
                    <p>But there is much to gain from paying attention. By understanding how nature works, we can
                        uncover
                        new principles and strategies to inspire better technologies for our own future.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;