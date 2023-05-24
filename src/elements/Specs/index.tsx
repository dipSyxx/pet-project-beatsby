/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SpecsStyles.module.sass'
import { Typography } from '../Typography'
import { SpecsData, SpecsDataProps } from '@/data/SpecsData'

export const Specs = () => {
  return (
    <div className={styles.specs}>
      <div className={styles.container}>
        <Typography component="h2" variant="h2" marginBottom="mb-70">
          Specs
        </Typography>
        <div className={styles.specs_inner}>
          <div className={styles.inner_content}>
            <ul className={styles.content_list}>
              {SpecsData.map(({ id, iconHref, title, subTitle, anim, paddingLeft }: SpecsDataProps) => (
                <li style={{ paddingLeft: `${paddingLeft}` }} key={id} className={styles.list_item}>
                  <div className={styles.item_icon}>
                    <img src={`/specs/${iconHref}.svg`} alt="icons" />
                  </div>
                  <Typography variant="h4" component="h4">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    {subTitle}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.inner_img}>
            <img src="/specs/hodetelefon.png" alt="headphone" />
          </div>
        </div>
      </div>
    </div>
  )
}
