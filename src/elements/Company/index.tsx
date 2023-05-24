/* eslint-disable react/jsx-no-undef */
import styles from './CompanyStyles.module.sass'
import { CompanyLogos, CompanyLogosProps } from '@/data/CompanyLogos'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export const Company = () => {
  return (
    <div className={styles.company}>
      <div className={styles.container}>
        <ul className={styles.company_list}>
          {CompanyLogos.map(({ id, href, index, size }: CompanyLogosProps) => (
            <li key={id} className={clsx(styles.list_item)}>
              <Image src={`/company/${href}.png`} width={100} height={size} alt="logos" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
