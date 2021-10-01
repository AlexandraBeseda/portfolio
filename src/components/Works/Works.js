import React from "react";
import s from "./Works.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Work} from "./Work/Work";
import {Title} from "../../common/components/Title";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title title={"Works"}/>
                <div className={s.works}>
                    <Work title={"Counter"} description={"Three versions"}/>
                    <Work title={"Social app"} description={"Samuray root"}/>
                </div>
            </div>

        </div>
    );
}

