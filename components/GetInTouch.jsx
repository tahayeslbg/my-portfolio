import React from 'react';

//Stiller
import styled from '../styles/GetInTouch.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

const GetInTouch = () => {
    const { t } = useTranslation();
    return (
        <div className={styled.getInTouchContainer}>
            <div className={styled.getInTouchInner}>
                <h3> {t("common:contact-title")} </h3>
                <p> {t("common:contact-text")} </p>
            </div>

            <div className={styled.getInTouchInner}>
                <h4> {t("common:contact-email")} </h4>
                <p> tahayesilbag1@gmail.com </p>
            </div>

            <div className={styled.getInTouchInner}>
                <h4> {t("common:contact-telephone")} </h4>
                <p> +90 531 513 5898 </p>
            </div>
        </div>
    );
};

export default GetInTouch;
