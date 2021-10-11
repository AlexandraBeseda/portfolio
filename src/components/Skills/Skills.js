import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Title} from "../../common/components/Title";
import { faCss3Alt,faHtml5, faJs, faNpm, faReact, faYarn} from "@fortawesome/free-brands-svg-icons";
import {Skill} from "./Skill/Skill";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"will have to make sure "} icon={faJs}/>
                    <Skill title={"CSS"} description={"will have to make sure "} icon={faCss3Alt}/>
                    <Skill title={"HTML"} description={"will have to make sure "} icon={faHtml5}/>
                    <Skill title={"React"} description={"will have to make sure "} icon={faReact}/>
                    <Skill title={"NPM"} description={"will have to make sure "} icon={faNpm}/>
                    <Skill title={"YARN"} description={"will have to make sure "} icon={faYarn}/>
                    <Skill title={"GITHUB"} description={"will have to make sure "} icon={faGithub}/>

                </div>
            </div>

        </div>
    );
}

