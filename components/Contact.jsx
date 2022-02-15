import React from 'react';
import ContactForm from './ContactForm';
import GetInTouch from './GetInTouch';

// Stiller
import styled from '../styles/Contact.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

const Contact = () => {
    
    const { t } = useTranslation();

    return (
        <div className={styled.contactContainer}>
            
            
            
            <div className={styled.contactInner}>
                <h1> {t("common:contact-big-title")} </h1>
                <div className={styled.contactInnerContactForm}>
                    <ContactForm />
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
};

export default Contact;
