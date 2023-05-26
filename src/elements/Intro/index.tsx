/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './IntroStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { Button, MButton } from '../Button'
import { motion } from 'framer-motion'
import { leftAnim, scaleAnim, topAnim } from '@/Animations'

export const Intro = () => {
  return (
    <motion.div className={styles.intro} id="home" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className={styles.container}>
        <div className={styles.intro_inner}>
          <motion.div variants={topAnim} custom={1} className={styles.inner_img}>
            <img src="/intro/introMainImg.png" alt="mainImgIntro" />
          </motion.div>
          <div className={styles.inner_content}>
            <MTypography variants={scaleAnim} custom={2.2} marginBottom="mb-30" component="h1" variant="h1">
              On ear
            </MTypography>
            <MTypography variants={leftAnim} custom={2.4} marginBottom="mb-70" component="h3" variant="h3">
              Beats 3
            </MTypography>
            <MTypography variants={leftAnim} custom={2.6} marginBottom="mb-30" component="h4" variant="h4">
              Overview
            </MTypography>
            <div className={styles.content_text}>
              <MTypography variants={leftAnim} custom={2.8} marginBottom="mb-40" component="p" variant="subtitle1">
                Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with
                comfortable padded earphones, delivering first-rate playback.
              </MTypography>
            </div>

            <MButton variants={leftAnim} custom={3} component="button" variant="primary" classNameStyles="button">
              <div className={styles.button_icon}>
                <img src="/icon/bag.png" alt="bag" />
              </div>
              Add to Bag <span style={{ fontSize: '20px', fontWeight: '700' }}>N399K</span>
            </MButton>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
