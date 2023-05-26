import React from 'react'
import styles from './FooterStyles.module.sass'
import { Typography } from '../Typography'
import Link from 'next/link'
import { FooterSectionSupport, FooterSectionSupportProps } from '@/data/FooterSection'
import { topAnim } from '@/Animations'
import { motion } from 'framer-motion'

export const SupportSection = () => {
  return (
    <>
      <motion.div variants={topAnim} custom={1.6} className={styles.inner_support}>
        <Typography component="h4" variant="h4">
          Support
        </Typography>
        <ul className={styles.support_list}>
          {FooterSectionSupport.map(({ id, text, path }: FooterSectionSupportProps) => (
            <li key={id} className={styles.list_item}>
              <Link href={path}>
                <Typography component="p" variant="subtitle1">
                  {text}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}
