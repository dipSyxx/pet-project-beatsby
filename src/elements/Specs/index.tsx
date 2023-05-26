/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SpecsStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { SpecsData, SpecsDataProps } from '@/data/SpecsData'
import { motion } from 'framer-motion'
import { leftAnim, topAnim } from '@/Animations'

export const Specs = () => {
  return (
    <motion.div
      className={styles.specs}
      id="specs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        <MTypography variants={topAnim} custom={1} component="h2" variant="h2" marginBottom="mb-70">
          Specs
        </MTypography>
        <div className={styles.specs_inner}>
          <div className={styles.inner_content}>
            <ul className={styles.content_list}>
              {SpecsData.map(({ id, iconHref, title, subTitle, anim, paddingLeft }: SpecsDataProps) => (
                <motion.li
                  variants={leftAnim}
                  custom={anim}
                  style={{ paddingLeft: `${paddingLeft}` }}
                  key={id}
                  className={styles.list_item}
                >
                  <div className={styles.item_icon}>
                    <img src={`/specs/${iconHref}.svg`} alt="icons" />
                  </div>
                  <MTypography variant="h4" component="h4">
                    {title}
                  </MTypography>
                  <MTypography variant="subtitle1" component="p">
                    {subTitle}
                  </MTypography>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div variants={leftAnim} custom={2} className={styles.inner_img}>
            <img src="/specs/hodetelefon.png" alt="headphone" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
