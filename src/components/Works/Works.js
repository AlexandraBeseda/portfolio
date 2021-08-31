import React from "react";
import s from "./Works.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Work} from "./Work/Work";

export const Works = (props) => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <div>
                    <h2 className={s.title}>Works</h2>
                </div>
                <div className={s.works}>
                    <Work title={"Counter"} description={"Three versions"}/>
                    <Work title={"Social app"} description={"Samuray root"}/>
                </div>
            </div>

        </div>
    );
}

