import React from "react";
import s from "./Works.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Work} from "./Work/Work";
import {Title} from "../../common/components/Title";
/*import socialAppImg from "../../assets/image/imgProject/put_samuraya.jpg";
import todolistAppImg from "../../assets/image/imgProject/todolist.jpg";*/


export const PATH = {
    TODOLIST: '/todolist',
    SOCIAL_APP: '/socialApp',
}

export const Works = () => {

//    const socialAppBackImg = `url(${socialAppImg})`;
    const todolistAppBackImg = "https://cdn.dribbble.com/users/1956978/screenshots/6238814/open-graph.png";
    //   const todolistAppBackImg = `url(${todolistAppImg})`;
    const socialAppBackImg = "https://i.pinimg.com/564x/31/61/92/3161926df735b51a872ab4fbece6ef9f.jpg";
    return (
        <div className={s.worksBlock}>
            <a name={"works"}/>

            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title title={"Works"}/>
                <div className={s.works}>
                    <Work img={todolistAppBackImg} title={"TodoList"} description={"Material UI"}
                          link={"https://alexandrabeseda.github.io/IgnatGames/#/pre-junior"}/>
                    <Work img={socialAppBackImg} title={"Social app"} description={"Ant Design"}
                          link={"https://alexandrabeseda.github.io/Put_samuraya_tsx/"}/>
                    <Work img={socialAppBackImg} title={"Ignat"} description={"Ignat Ignat"}
                          link={"https://alexandrabeseda.github.io/Put_samuraya_tsx/"}/>

                </div>
            </div>

        </div>
    );
}

