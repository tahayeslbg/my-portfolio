import React, {useEffect} from 'react';
import Passion from './Passion';
import Skills from './Skills';

//Stil
import styled from "../styles/About.module.css"

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyon
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { t } = useTranslation();

    const {ref, inView} = useInView({
        threshold: 0.3
    });

    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const animationTitle = useAnimation();

    useEffect(() => {

        if(inView) {
            animationTitle.start({
                opacity: 1,
                transition: {
                    duration: 1.1
                }
            })

            animationLeft.start({
                opacity: 1,
                transition: {
                    duration: 1.1,
                    delay: 0.5
                }
            })

            animationRight.start({
                opacity: 1,
                transition: {
                    duration: 1.1,
                    delay: 1
                }
            })
        }

        if(!inView) {
            animationTitle.start({
                opacity: 0
            })

            animationLeft.start({
                opacity: 0
            })

            animationRight.start({
                opacity: 0
            })
        }
    },[inView])


    return (
        <>
        <div className={styled.aboutContainer} id='about'>
            <div className={styled.aboutInner}>
                <div ref={ref}>
                <motion.h1 animate={animationTitle}>  {t("common:about-big-title")} </motion.h1>
                </div>
                <div ref={ref} className={styled.aboutTextContainer}>
                    <motion.div className={styled.aboutTextInner} animate={animationLeft}>
                        <h2> {t("common:about-title1")} </h2>
                        <p> {t("common:about-text1")} </p>
                    </motion.div>
                    <motion.div className={styled.aboutTextInner} animate={animationRight}>
                        <h2> {t("common:about-title2")} </h2>
                        <p> {t("common:about-text2")} </p>
                    </motion.div>
                </div>

                <Passion />
                
            </div>
        </div>

        <Skills />
        
        </>
    );
};

export default About;
