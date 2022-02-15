import React, { useRef, useState } from 'react';

//Stiller
import styled from '../styles/ContactForm.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Send Email
import emailjs from '@emailjs/browser';




const Result = () => {
  const { t } = useTranslation();
  return (
    <p style={{color: "var(--secondary-color)", fontSize:"14px"}}> {t("common:contact-successfull")} </p>
  )
}




const ContactForm = () => {

  const { t } = useTranslation();

  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fi2bw36', 'template_04cvt8k', form.current, 'user_oedYITVh86NfpKENEB9Ui')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
  };

  setTimeout(() => {
    showResult(false)
  },5000)

    return (
      <form className={styled.contactFormContainer} ref={form} method='post' onSubmit={sendEmail} id='contact'>
        <div className={styled.contactFormInner}>
          <label htmlFor='fullName'> {t("common:contact-name-surname")} </label>
          <input type="text" name='fullName' pattern="[a-zçğıöşüA-ZÇĞIÖŞÜ'-'\s]*" required/>
        </div>

        <div className={styled.contactFormInner}>
          <label htmlFor="email"> {t("common:contact-email")} </label>
          <input type="email" name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
        </div>

        <div className={styled.contactFormInner}>
          <label htmlFor="message"> {t("common:contact-message")} </label>
          <textarea  name='message' id={styled.textarea} required rows="15" columns="5"/>
        </div>
        

        
        <div className={styled.contactFormButton}>
          <div className={styled.contactFormMessage}>
          {result ? <Result /> : null}
          </div>
          <button type='submit'> {t("common:contact-btn-text")} </button>
        </div>
      </form>
    );
};

export default ContactForm;
