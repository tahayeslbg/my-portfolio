import React from 'react'

//Stiller
import styled from '../styles/Footer.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Ikonlar
import { FaInstagram, FaDribbble } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={styled.footerContainer}>
            <div className={styled.footerInner}>
                <div className={styled.footerText}>
                    <h4> {t("common:footer-title")} </h4>
                    <p> {t("common:footer-text")} </p>
                </div>

                <div className={styled.footerSocial}>
                    <FaInstagram />
                    <FaDribbble />
                </div>

                <p className={styled.copyRight}> {t("common:footer-copyright")} </p>
            </div>
        </div>
    )
}

export default Footer