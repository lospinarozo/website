import {Avatar, AvatarFallback, AvatarImage} from "#components/ui/avatar";
import avatarPicture from "../assets/avatar.jpg?w=100;200;400&format=webp;jpg&as=picture&imagetools"

function Home() {
    return (
        <>
            <div className="typeset pb-6">
                <blockquote className="text-xl italic">The said question of the said animal in its entirety comes down
                    to knowing not whether the animal speaks, but whether one can know what it truly means to respond.
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
                    <p>A cross-disciplinary scientist investigating how biological nanostructures control light.
                    </p>
                    <p>I am fascinated by how much effort it takes us humans to understand what comes so naturally to
                        other forms of life. We use advanced microscopes, electron accelerators, sophisticated
                        algorithms aided by artificial intelligence. We solve equations, mix reagents and model
                        intricate geometries. All that trouble to understand how a little bug produces a flash of
                        colour?
                    </p>
                    <p>Yes! because there is much to gain from paying attention. By understanding how nature interacts
                        with light, we can uncover new strategies to improve our human technologies.</p>
                    <p>If nature has been perfecting photonic devices for millions of years, who are we to ignore its
                        wisdom?
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;