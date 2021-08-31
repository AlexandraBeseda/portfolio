import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div>
                    <h2 className={s.title}>Skills</h2>
                </div>
                <div className={s.skills}>
                    <Skill title={"JS"}
                           description={"will have to make sure "}/>
                    <Skill title={"CSS"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>
                    <Skill title={"HTML"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>
                    <Skill title={"React"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>
                </div>
            </div>

        </div>
    );
}

