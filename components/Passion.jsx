import React, {useEffect} from 'react';

//Stil
import styled from "../styles/Passion.module.css"

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyon
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Passion = () => {
    const { t } = useTranslation();

    const {ref, inView} = useInView({
    });

    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const animationTitle = useAnimation();
    const animationBigTitle = useAnimation();
    const animationBottom = useAnimation();

    useEffect(() => {

        if(inView) {
            animationBigTitle.start({
                opacity: 1,
                transition: {
                    duration: 1
                }
            })

            animationTitle.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0.5
                }
            })

            animationLeft.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 1
                }
            })

            animationRight.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 1.5
                }
            })

            animationBottom.start({
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 2
                }
            })
        }

        if(!inView) {
            animationBigTitle.start({
                opacity: 0
            })

            animationTitle.start({
                opacity: 0
            })

            animationLeft.start({
                opacity: 0
            })

            animationRight.start({
                opacity: 0
            })

            animationBottom.start({
                opacity: 0
            })
        }
    },[inView])

    return (
        <>
        <div ref={ref}>
            <motion.h2 className={styled.aboutPassionTitle} animate={animationBigTitle}> {t("common:about-title3")} </motion.h2>
        </div>
        <div ref={ref} className={styled.aboutPassionTextContainer}>

            <div className={styled.aboutPassionTextInner}>
                <motion.h3 animate={animationTitle}> {t("common:about-sub-title1")} </motion.h3>
                <motion.p animate={animationLeft}> {t("common:about-text3")} </motion.p>
            </div>
            <div className={styled.aboutPassionTextInner}>
                <motion.h3 animate={animationTitle}> {t("common:about-sub-title2")} </motion.h3>
                <motion.p animate={animationRight}> {t("common:about-text4")} </motion.p>
            </div>
            <div className={styled.aboutPassionTextInner}>
                <motion.h3 animate={animationTitle}> {t("common:about-sub-title3")} </motion.h3>
                <motion.p animate={animationBottom}> {t("common:about-text5")} </motion.p>
            </div>
        </div>
        </>
    )
};

export default Passion;
