import React from "react";
import s from "./Hi.module.css";
import {Signs} from "../Footer/Signs/Signs";
import {Header} from "../Header/Header";
export const Hi = () => {


    return (
        <div className={s.header_img}>
            <Header/>
            <div className={s.title}>
                <h1>Hi, I Am Alexandra</h1>
                <h2>I Am Developer</h2>
                <Signs/>
            </div>

        </div>
    );
}

