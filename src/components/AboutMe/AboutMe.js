import React from "react";
import s from "./AboutMe.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Title} from "../../common/components/Title";

export const AboutMe = () => {
    return (
        <div className={s.mainBlock}>

            <div className={`${styleContainer.container} ${s.aboutMeContainer}`}>
                <Title title={"About Alexandra"}/>
                <div className={s.containerForPhotoAndText}>
                    <div className={s.photo}>

                    </div>
                    <div className={s.text}>
                        <h5>
                            Hello,I am Alexandra. Currently working as a senior Website Developer.
                        </h5>

                        {/*TODO здесь можно попроще?*/}
                        <p>I am always passionate about Website Development,<br/>
                            love to create modern Website & provide great client support.
                        </p>
                        <p>
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,<br/>
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.<br/>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

