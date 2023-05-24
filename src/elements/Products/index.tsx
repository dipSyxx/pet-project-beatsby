import React from 'react'
import styles from './ProductsStyles.module.sass'
import { Typography } from '../Typography'
import { ProductsData, ProductsDataProps } from '@/data/ProductsData'
import { ProductCards } from '@/features/ProductCards'

export const Products = () => {
  return (
    <div className={styles.products}>
      <Typography marginBottom="mb-70" variant="h2" component="h2">
        Choose Your Style
      </Typography>
      <div className={styles.container}>
        <ul className={styles.products_list}>
          {ProductsData.map(({ id, title, subtitle, hrefImg, index }: ProductsDataProps) => (
            <ProductCards key={id} title={title} subtitle={subtitle} hrefImg={hrefImg} id={id} index={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}
