import React, {useState} from "react";
import s from "./Nav.module.css";

export const Nav = () => {

    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
    }
    return (
        <div className={`${s.menuWrapper} ${!isActive && s.expanded}`}>
            <div className={`${s.container} ${!isActive && s.close}`}>
                <div className={`${s.buttonMenu} ${!isActive && s.close}`} onClick={handleClick}/>

                <ul className={s.menuList}>
                    <li className={`${s.menuItem} ${isActive && s.hidden}`}>
                        <a href="#">Home</a>
                    </li>
                    <li className={`${s.menuItem} ${isActive && s.hidden}`}>
                        <a href={"#about"}>About</a>
                    </li>
                    <li className={`${s.menuItem} ${isActive && s.hidden}`}>
                        <a href={"#works"}>Works</a>
                    </li>
                    <li className={`${s.menuItem} ${isActive && s.hidden}`}>
                        <a href={"#contacts"}>Contact</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
