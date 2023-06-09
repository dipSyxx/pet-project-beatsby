/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './ProductCardsStyles.module.sass'
import { ProductsDataProps } from '@/data/ProductsData'
import { Button } from '@/elements/Button'
import { motion } from 'framer-motion'
import { topAnim } from '@/Animations'

export const ProductCards = ({ id, title, subtitle, hrefImg, index }: ProductsDataProps) => {
  return (
    <motion.li variants={topAnim} custom={index} className={styles.product_cards}>
      <div className={styles.content_img}>
        <img src={`/product/${hrefImg}.png`} alt="product" />
      </div>
      <div className={styles.content_info}>
        <div className={styles.info_text}>
          <div className={styles.text_title}>{title}</div>
          <div className={styles.text_subtitle}>{subtitle}</div>
        </div>
        <div className={styles.info_btn}>
          <Button component="button" variant="buy_btn" classNameStyles="button">
            <img src="/icon/bag.png" alt="buy" />
          </Button>
        </div>
      </div>
    </motion.li>
  )
}
