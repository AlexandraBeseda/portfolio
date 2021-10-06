import React from "react";
import s from "./Footer.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Signs} from "./Signs/Signs";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Signs/>

                <div className={s.rights}>@2021 All rights reserved.</div>
            </div>
        </div>
    );
}

