import React from "react";
import s from "./Contacts.module.css";
import styleContainer from "./../../common/styles/Container.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={s.contactForm} action="">
                        <input type="text" value={"1"}/>
                        <input type="text" value={"2"}/>
                        <input type="text" value={"3"}/>
                        <textarea placeholder={"write your message"} />
                </form>
                <button>Send Message</button>
            </div>

        </div>
    );
}

