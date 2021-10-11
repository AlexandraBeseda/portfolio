import {Formik, Field, Form} from 'formik';
import s from './ContactForm.module.css'

export const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                content: ''
            }}
            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form style={{width:"100%"}}>
                    <div className={s.nameAndEmailContainer}>
                        <Field name="name" className={s.name} type="text" placeholder={"Name"}/>
                        <Field name="email" className={s.email} type="email" placeholder={"Email"}/>
                    </div>

                    <div className={s.subjectAndContentContainer}>
                        <Field name="subject" className={s.subject} type="text" placeholder={"Subject"}/>
                    </div>

                    <div className={s.subjectAndContentContainer}>
                        <Field name="content" className={s.content} component="textarea" placeholder={"Content"}/>
                    </div>
                    <div className={s.submitBtnContainer}>
                        <button type="submit"
                                className={s.submitBtn}
                                disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
};