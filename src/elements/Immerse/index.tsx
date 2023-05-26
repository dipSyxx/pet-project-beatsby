/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './ImmerseStyles.module.sass'
import { Button } from '../Button'
import { motion } from 'framer-motion'
import { scaleAnim } from '@/Animations'

export const Immerse = () => {
  return (
    <motion.div
      className={styles.immerse}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={scaleAnim} custom={1} className={styles.container}>
        <div className={styles.container_content}>
          <div className={styles.immerse_inner}>
            <div className={styles.inner_content}>
              <div className={styles.content_title}>Immerse yourself in your music</div>
              <div className={styles.content_subtitle}>Buy Now, up to 40% off.</div>
              <div>
                <Button component="button" variant="secondary" classNameStyles="button">
                  <span className={styles.btn_icon}>
                    <img src="/icon/bag.png" />
                  </span>
                  Buy now
                </Button>
              </div>
            </div>

            <div className={styles.inner_img}>
              <img src="/immerse/headphone.png" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
