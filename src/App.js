import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;