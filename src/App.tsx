import {Outlet} from "react-router-dom"
import './App.css'
import heroImage from './assets/hero.png?w=480;800;1200;1600&format=webp;jpg&as=picture&imagetools'
import HeroImage from "#components/HeroImage";
import AppMainMenu from "./partials/AppMainMenu.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <AppMainMenu/>
            <HeroImage src={heroImage} alt="Hero"/>
            <div className="flex-1 p-6 w-full lg:max-w-3/4 xl:max-w-2/3"><Outlet/></div>
        </div>
    )
}

export default App
