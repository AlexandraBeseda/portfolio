import React from "react";
import s from "./Work.module.css";

export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.imageContainer} style={{backgroundImage: `url(${props.img})`}}>
                {/*перекрывает*/}
                <div className={s.overlay}>
                    <h3 className={s.title}>{props.title}</h3>
                    <p className={s.description}>{props.description}</p>
                    <a className={s.button} href={props.link}>
                        Watch
                    </a>
                </div>
            </div>
        </div>
    );
}

