import React from "react";
import s from "./Work.module.css";

export const Work = (props) => {
    return (
        <div className={s.work}>
            <img src="" alt={"watch"}/>
            <div>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

