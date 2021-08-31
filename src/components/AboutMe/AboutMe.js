import React from "react";
import s from "./AboutMe.module.css";
import styleContainer from "./../../common/styles/Container.module.css"

export const AboutMe = () => {
    return (
        <div className={s.mainBlock}>

            <div className={styleContainer.container}>
                <div className={s.photo}>

                </div>
                <div className={s.text}>
                    <h5>
                        Hello,I am Michkel. Currently working as a senior Website Developer.
                    </h5>
                    {/*                    <p>
                        I am Harrison Michkel.
                        Currently working as a senior Website Developer.
                        I am always passionate about Website Development,
                        love to create modern Website & provide great client support.
                        There! I am Harrison Hoper. Currently working as a senior Website Developer.
                        I am always passionate about Website Development, love to create modern Website & provide great
                        client support
                    </p>
                    <p>
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem
                        Ipsum.
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem
                        Ipsum.
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem
                        Ipsum.
                    </p>*/}
                </div>

            </div>
        </div>
    );
}

