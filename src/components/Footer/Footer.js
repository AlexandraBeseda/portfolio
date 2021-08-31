import React from "react";
import s from "./Footer.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Sign} from "./Sign/Sign";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div>
                    <h2 className={s.title}>Alexandra Beseda</h2>
                </div>
                <div className={s.smth}>
                    <Sign />
                    <Sign />
                    <Sign />
                    <Sign />
                </div>
                <div className={s.rights}>@2021 All rights reserved.</div>
            </div>
        </div>
    );
}

