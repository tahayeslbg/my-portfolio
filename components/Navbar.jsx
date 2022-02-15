import React, { useState } from 'react';
import Link from 'next/link';
import ThemeChanger from './ThemeChanger'

//Stil
import styled from '../styles/Navbar.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from '../i18n.json'

const { locales } = i18nConfig;

//İkonlar
import { RiCloseFill } from "react-icons/ri";
import { FaInstagram, FaDribbble } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";



const Navbar = () => {
    const { t, lang } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className={styled.navbarContainer}>
            <div className={styled.navbarInner}>
                <div className={styled.logo}>
                    <Link href="/">
                    <a>
                        {t("common:logo")}
                    </a>
                    </Link>
                </div>

                <div className={styled.Icon}>
                    <ThemeChanger />
                </div>

                <div className={styled.other}>
                <div className={styled.language}>
                    {
                        locales.map((lng) => {
                            if (lng === lang) return null
                            
                            return (
                                <Link href="/" locale={lng} key={lng}>
                                    <a> {t(`common:language-name-${lang}`)} </a>
                                </Link>
                                )
                        })
                    }
                </div>

                <div className={styled.socialIcons}>
                    <div className={styled.socialIcon}>
                        <FaInstagram />
                    </div>
                    <div className={styled.socialIcon}>
                        <FaDribbble />
                    </div>
                </div>

                <div className={styled.menuIcon}>
                    <HiMenuAlt4 onClick={() => setOpen(!open)}/>
                </div>
                </div>
            </div>   
        </div>


        <div className={`${styled.menuItems} ${open ? styled.menuItemsOpen  : styled.menuItems}`}>
            <div className={styled.menuCloseIcon}>
                <RiCloseFill onClick={() => {setOpen(!open) ? styled.menuItemsOpen : styled.menuItems}} />
            </div>
            <Link href="#home">
                <a>
                    {t("common:menu-item1")}
                </a>
            </Link>
            <Link href="#about">
                <a>
                {t("common:menu-item2")}
                </a>
                </Link>
            <Link href="#works">
                <a>
                {t("common:menu-item3")}
                </a>
                </Link>
            <Link href="#contact">
                <a>
                {t("common:menu-item4")}
                </a>
                </Link>
        </div>
        </>
    );
};

export default Navbar;
