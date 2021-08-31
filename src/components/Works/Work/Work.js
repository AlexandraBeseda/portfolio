import React from "react";
import s from "./Work.module.css";

export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.imageContainer}>
                <a href={""}>Watch
                    {/*<img src="" alt={"project"}/>*/}
                </a>

            </div>
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

