import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './assets/globals.css'
import App from './App.tsx'
import Home from "#pages/Home";
import {NOT_FOUND_ROUTE, routes} from "#lib/constants/routes"
import Publications from "#pages/Publications";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={routes.get("home")?.path ?? NOT_FOUND_ROUTE.path} element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path={routes.get("publications")?.path ?? NOT_FOUND_ROUTE.path} element={<Publications/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
