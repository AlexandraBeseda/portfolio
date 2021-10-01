import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
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

