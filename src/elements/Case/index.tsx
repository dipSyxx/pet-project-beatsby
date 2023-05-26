/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './CaseStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { Button, MButton } from '../Button'
import { motion } from 'framer-motion'
import { leftAnim, topAnim } from '@/Animations'

export const Case = () => {
  return (
    <motion.div
      className={styles.case}
      id="case"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <MTypography variants={topAnim} custom={1} marginBottom="mb-70" variant="h2" component="h2">
        Case
      </MTypography>
      <div className={styles.container}>
        <div className={styles.case_inner}>
          <motion.div variants={leftAnim} custom={1.4} className={styles.inner_img}>
            <img src="/case/case.png" alt="case" />
          </motion.div>
          <div className={styles.inner_content}>
            <MTypography variants={leftAnim} custom={1.8} variant="subtitle1" component="p">
              With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability
              forever.
            </MTypography>
            <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <MButton
                variants={leftAnim}
                custom={2.2}
                component="a"
                variant="primary"
                classNameStyles="button"
                href="/"
              >
                <span className={styles.btn_icon}>
                  <img src="/case/icon.svg" alt="icon" />
                </span>
                More info
              </MButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
