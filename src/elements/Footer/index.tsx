/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import styles from './FooterStyles.module.sass'
import { ProductSection } from './ProductSection'
import { SupportSection } from './SupportSection'
import { SubscribesSection } from './SubscribesSection'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <a href="/" className={styles.inner_logo}>
            <img src="/logo/logo.png" alt="footerLogo" />
          </a>
          <ProductSection />
          <SupportSection />
          <SubscribesSection />
        </div>
        <div className={styles.footer_footer}>
          <p>© Agara. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
