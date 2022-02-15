import React, {useEffect} from 'react';
import Link from 'next/link';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

//Stiller
import styled from '../styles/Works.module.css'

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyon
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Works = () => {
  const { t } = useTranslation();

  const {ref, inView} = useInView({
    threshold: 0
  });

  const animationTitle = useAnimation();

  useEffect(() => {
    if(inView) {
      animationTitle.start({
        opacity: 1,
        transition: {
            duration: 1.1
        }
    })
    }

    if(!inView) {
      animationTitle.start({
        opacity: 0
        })
    }
},[inView])


  return (
    <div ref={ref} className={styled.worksContainer} id='works'>
      <div className={styled.worksInner}>
        <motion.h1 animate={animationTitle}> {t("common:works-big-title")} </motion.h1>

        <span> {t("common:works-projects1")} </span>

        <div className={styled.projectsContainer}>
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
        </div>

        <span> {t("common:works-projects2")} </span>
      </div>
    </div>
  );
};

export default Works;
