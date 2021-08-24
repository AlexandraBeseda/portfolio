import React from "react";
import s from "./Skills.module.css";
import styleContainer from "./../../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div>
                    <h2 className={s.title}>Skills</h2>
                </div>
                <div className={s.skills}>

                </div>
            </div>

        </div>
    );
}

