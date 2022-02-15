import React, {useEffect} from 'react'
import Link from 'next/link';

//Stiller
import styled from "../styles/Project1.module.css"

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyonlar
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Project1 = () => {
    const { t } = useTranslation();

    const {ref, inView} = useInView({
        threshold: 1
    });

    const animationProjectLeft1 = useAnimation();

    useEffect(() => {

        if(inView) {
        animationProjectLeft1.start({
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 1.3
                }
            })
        }
    
        if(!inView) {
        animationProjectLeft1.start({
                x:"-100vw"
            })
        }
    },[inView])

    return (
        <div ref={ref}>
<motion.div className={styled.projectsInner} animate={animationProjectLeft1}>
            <div className={styled.projectsInnerText}>
            <h4> {t("common:works-title1")} </h4>
            <p> {t("common:works-text1")} </p>
            <Link href="https://www.instagram.com/tahayeslbg/">
                <a> {t("common:works-btn-text")} </a>
            </Link>
            </div>
        </motion.div>
        </div>
        
    )
}

export default Project1