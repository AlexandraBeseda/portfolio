import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Skills} from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
        </div>
    );
}

export default App;
