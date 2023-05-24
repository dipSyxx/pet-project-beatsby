import React from 'react'
import styles from './FooterStyles.module.sass'
import { Typography } from '../Typography'
import Link from 'next/link'
import { FooterSectionProducts, FooterSectionProductsProps } from '@/data/FooterSection'

export const ProductSection = () => {
  return (
    <>
      <div className={styles.inner_products}>
        <Typography component="h4" variant="h4">
          Products
        </Typography>
        <ul className={styles.products_list}>
          {FooterSectionProducts.map(({ id, text, path }: FooterSectionProductsProps) => (
            <li key={id} className={styles.list_item}>
              <Link href={path}>
                <Typography component="p" variant="subtitle1">
                  {text}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
