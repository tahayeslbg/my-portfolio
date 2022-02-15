import React, {useEffect} from 'react';

//Stil
import styled from "../styles/Skills.module.css"

//Çoklu Dil Özelliği
import useTranslation from 'next-translate/useTranslation'

//Animasyon
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
                x:0,
                transition: {
                    duration: 1.1
                }
            })

            animationRight.start({
                x:0,
                transition: {
                    duration: 1.1,
                    delay: .5
                }
            })
        }

        if(!inView) {
            animationTitle.start({
                opacity: 0
            })

            animationLeft.start({
                x: -1000
            })

            animationRight.start({
                x: 1000
            })
        }
    },[inView])


    return (
        <div ref={ref} className={styled.SkillsContainer}>
                    <div className={styled.SkillsInner}>
                    <motion.h2 animate={animationTitle}> {t("common:about-title4")} </motion.h2>
                    </div>

                    <div className={styled.SkillsInner}>
                        
                        
                            <motion.div className={styled.SkillsInnerTextInner} animate={animationLeft}>
                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>HTML</span>
                                            <span>90%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner , styled.Box1}></div>
                                        </div>
                                    </div>

                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>CSS</span>
                                            <span>95%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner , styled.Box2}></div>
                                        </div>
                                    </div>

                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>Javascript</span>
                                            <span>75%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner, styled.Box3}></div>
                                        </div>
                                    </div>
                            </motion.div>

                            <motion.div className={styled.SkillsInnerTextInner} animate={animationRight}>
                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>Figma</span>
                                            <span>80%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner, styled.Box4}></div>
                                        </div>
                                    </div>

                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>React.js</span>
                                            <span>85%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner, styled.Box5}></div>
                                        </div>
                                    </div>

                                    <div className={styled.SkillsInnerTextInnerContainer}>
                                        <div className={styled.SkillsInnerTextInnerTitle}>
                                            <span>Next.js</span>
                                            <span>85%</span>
                                        </div>
                                        
                                        <div className={styled.SkillsInnerTextInnerBox}>
                                            <div className={styled.SkillsInnerTextInnerBoxInner, styled.Box6}></div>
                                        </div>
                                    </div>
                            </motion.div>
                            
                            
                        
                    </div>
                </div>
    );
};

export default Skills;
