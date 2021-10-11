import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Skill.module.css";

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <h4>{props.title}</h4>
            <div className={s.imageContainer}>
                <FontAwesomeIcon className={s.icon} icon={props.icon}/>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

