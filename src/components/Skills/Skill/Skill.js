import React from "react";
import s from "./Skill.module.css";

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <h4>{props.title}</h4>
            <div className={s.imageContainer}>
                <a href={""}>Watch
                    {/*<img src="" alt={"project"}/>*/}
                </a>

            </div>
            <span className={s.description}>{props.description}</span>

        </div>
    );
}

