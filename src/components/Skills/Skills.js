import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Title} from "../../common/components/Title";
import { faCss3Alt,faHtml5, faJs, faNpm, faReact, faYarn} from "@fortawesome/free-brands-svg-icons";
import {SkillSquare,SkillCircle} from "./Skill/Skill";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <SkillSquare title={"JS"} description={"will have to make sure "} icon={faJs}/>
                    <SkillSquare title={"CSS"} description={"will have to make sure "} icon={faCss3Alt}/>
                    <SkillSquare title={"HTML"} description={"will have to make sure "} icon={faHtml5}/>
                    <SkillSquare title={"React"} description={"will have to make sure "} icon={faReact}/>
                    <SkillSquare title={"NPM"} description={"will have to make sure "} icon={faNpm}/>
                    <SkillCircle title={"YARN"} description={"will have to make sure "} icon={faYarn}  />
                    <SkillCircle title={"GITHUB"} description={"will have to make sure "} icon={faGithub}/>

                </div>
            </div>

        </div>
    );
}

