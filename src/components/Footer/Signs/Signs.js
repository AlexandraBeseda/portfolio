import React from "react";
import s from "./Signs.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faGoogle, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";

export const Signs = () => {
    //TODO может стоит прижать к низу?
    return (<div className={s.icons}>
            <a href={"https://github.com/AlexandraBeseda"}><FontAwesomeIcon icon={faGithub} className={s.icon}/></a>
            <a href={"s.ani.aa862@gmail.com"}><FontAwesomeIcon icon={faGoogle} className={s.icon}/></a>
            <a href={"https://www.facebook.com/alexandra.beseda.7/"}><FontAwesomeIcon icon={faFacebook} className={s.icon}/></a>
            <a href={"https://t.me/AlexBezze"}><FontAwesomeIcon icon={faMobileAlt}className={s.icon}/></a>
            <a href={"https://www.linkedin.com/in/aleksandra-beseda-a34075202"}><FontAwesomeIcon icon={faLinkedinIn} className={s.icon}/></a>
        </div>
    );
}

