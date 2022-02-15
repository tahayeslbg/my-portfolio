import React from 'react';

//Stil
import styled from '../styles/Header.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyon
import { motion } from 'framer-motion';

const Header = () => {
    const { t } = useTranslation();
        
        const itemTitle = {
            hidden: { opacity:0 },
            show: { 
            opacity:1 ,
            transition: {
                ease: [0.17, 0.27, 0.33, 0.47],
                duration: 0.6,
                delay: 1
            }
        }
        }

        const itemLines = {
            hidden: { opacity:0 },
            show: { 
            opacity:1 ,
            transition: {
                ease: [0.17, 0.27, 0.33, 0.47],
                duration: 0.6,
                delay: 1.5
            }
        }
        }

        const itemText = {
            hidden: { opacity:0 },
            show: { 
            opacity:1 ,
            transition: {
                ease: [0.17, 0.27, 0.33, 0.47],
                duration: 0.6,
                delay: 2
            }
        }
        }

        const itemPortfolio = {
            hidden: { opacity:0 },
            show: { 
            opacity:1 ,
            transition: {
                ease: [0.17, 0.27, 0.33, 0.47],
                duration: 0.6,
                delay: 0.5
            }
        }
        }

    return (
        <div className={styled.headerContainer} id='home'>
            
            <div className={styled.headerInner}>
                <div className={styled.headerInnerLeft}>
                    <motion.div className={styled.headerInnerTitle} variants={itemTitle} initial="hidden" animate="show">
                    <h1> {t("common:header-title1")} </h1>
                    <h1> {t("common:header-title2")} </h1>
                    </motion.div>
                    <motion.div className={styled.lines} variants={itemLines} initial="hidden" animate="show">
                        <div className={styled.line}></div>
                        <div className={styled.line}></div>
                    </motion.div>
                    <motion.p variants={itemText} initial="hidden" animate="show"> {t("common:header-text")} </motion.p>
                </div>
                <div className={styled.headerInnerRight}>
                    <div className={styled.image}>
                    <motion.p variants={itemPortfolio} initial="hidden" animate="show"> {t("common:portfolio-text")} </motion.p>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};

export default Header;
