import React from 'react'
import styles from './ProductsStyles.module.sass'
import { MTypography, Typography } from '../Typography'
import { ProductsData, ProductsDataProps } from '@/data/ProductsData'
import { ProductCards } from '@/features/ProductCards'
import { motion } from 'framer-motion'
import { topAnim } from '@/Animations'

export const Products = () => {
  return (
    <motion.div
      className={styles.products}
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <MTypography variants={topAnim} custom={1} marginBottom="mb-70" variant="h2" component="h2">
        Choose Your Style
      </MTypography>
      <div className={styles.container}>
        <ul className={styles.products_list}>
          {ProductsData.map(({ id, title, subtitle, hrefImg, index }: ProductsDataProps) => (
            <ProductCards key={id} title={title} subtitle={subtitle} hrefImg={hrefImg} id={id} index={index} />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
