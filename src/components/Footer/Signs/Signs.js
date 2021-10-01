import React from "react";
import s from "./Signs.module.css";
import {Sign} from "../Sign/Sign";

export const Signs = () => {
    return (<div className={s.icons}>
            <Sign/>
            <Sign/>
            <Sign/>
            <Sign/>
        </div>
    );
}

