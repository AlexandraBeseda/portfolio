import React from "react";
import s from "./Signs.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faGoogle, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";

export const Signs = () => {
    //TODO может стоит прижать к низу?
    return (<div className={s.icons}>
            <a><FontAwesomeIcon icon={faGithub} size={"2x"} className={s.icon}/></a>
            <a><FontAwesomeIcon icon={faGoogle} size={"2x"} className={s.icon}/></a>
            <a><FontAwesomeIcon icon={faFacebook} size={"2x"} className={s.icon}/></a>
            <a><FontAwesomeIcon icon={faMobileAlt} size={"2x"} className={s.icon}/></a>
            <a><FontAwesomeIcon icon={faLinkedinIn} size={"2x"} className={s.icon}/></a>
        </div>
    );
}

