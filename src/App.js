import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {Hi} from "./components/Hi/Hi";
import {Tab} from "./components/Tab/Tab";

function App() {
    return (
        <div className="App">
            <Hi/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Tab/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
