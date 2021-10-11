import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Skill.module.css";

export const SkillSquare = (props) => {
    return (
        <div className={s.skill}>
            <h4>{props.title}</h4>
            <div className={s.imageContainer}>
                <FontAwesomeIcon className={s.iconSquare} icon={props.icon}/>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}
export const SkillCircle = (props) => {
    return (
        <div className={s.skill}>
            <h4>{props.title}</h4>
            <div className={s.imageContainer}>
                <FontAwesomeIcon className={s.iconCircle} icon={props.icon}/>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}
