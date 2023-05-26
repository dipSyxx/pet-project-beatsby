/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import styles from './FooterStyles.module.sass'
import { ProductSection } from './ProductSection'
import { SupportSection } from './SupportSection'
import { SubscribesSection } from './SubscribesSection'
import { motion } from 'framer-motion'
import { leftAnim } from '@/Animations'

export const Footer = () => {
  return (
    <motion.footer className={styles.footer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <a href="/" className={styles.inner_logo}>
            <motion.img variants={leftAnim} custom={1.2} src="/logo/logo.png" alt="footerLogo" />
          </a>
          <ProductSection />
          <SupportSection />
          <SubscribesSection />
        </div>
        <div className={styles.footer_footer}>
          <p>© Agara. All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  )
}
