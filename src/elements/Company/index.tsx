/* eslint-disable react/jsx-no-undef */
import styles from './CompanyStyles.module.sass'
import { CompanyLogos, CompanyLogosProps } from '@/data/CompanyLogos'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { leftAnim } from '@/Animations'

export const Company = () => {
  return (
    <motion.div className={styles.company} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className={styles.container}>
        <ul className={styles.company_list}>
          {CompanyLogos.map(({ id, href, index, size }: CompanyLogosProps) => (
            <motion.li variants={leftAnim} custom={index} key={id} className={clsx(styles.list_item)}>
              <Image src={`/company/${href}.png`} width={100} height={size} alt="logos" />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
