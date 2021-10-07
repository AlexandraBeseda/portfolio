import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Title} from "../../common/components/Title";
import {faCss3, faCss3Alt, faGoogle, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"}/>



                <div className={s.skills}>

                    <div className={s.skill}>
                        <h4>{"JS"}</h4>
                        <div className={s.imageContainer}>
                            <FontAwesomeIcon className={s.icon} icon={ faJs}   />
                        </div>
                        <span className={s.description}>{"will have to make sure "}</span>
                    </div>

                    <div className={s.skill}>
                        <h4>{"CSS"}</h4>
                        <div className={s.imageContainer}>
                            <FontAwesomeIcon className={s.icon} icon={ faCss3Alt} size={"4x"}  />
                        </div>
                        <span className={s.description}>{"will have to make sure "}</span>
                    </div>

                    <div className={s.skill}>
                        <h4>{"HTML"}</h4>
                        <div className={s.imageContainer}>
                            <FontAwesomeIcon icon={ faHtml5} size={"4x"}  />
                        </div>
                        <span className={s.description}>{"will have to make sure "}</span>
                    </div>

                    <div className={s.skill}>
                        <h4>{"React"}</h4>
                        <div className={s.imageContainer}>
                            <FontAwesomeIcon icon={ faReact} size={"4x"}  pulse/>
                        </div>
                        <span className={s.description}>{"will have to make sure "}</span>
                    </div>
                {/*    <Skill title={"JS"}
                           description={"will have to make sure "}/>
                    <Skill title={"CSS"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>
                    <Skill title={"HTML"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>
                    <Skill title={"React"}
                           description={"will have to make sure the prototype looks finished by inserting text or photo."}/>*/}
                </div>
            </div>

        </div>
    );
}

