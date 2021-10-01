import React from "react";
import s from "./Contacts.module.css";
import styleContainer from "./../../common/styles/Container.module.css"
import {Title} from "../../common/components/Title";
import {ContactForm} from "./ContactForm/ContactForm";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <div className={s.contactForm}>
                    <ContactForm/>
                </div>


            </div>

        </div>
    );
}

