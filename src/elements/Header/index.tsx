import React, { useState } from 'react'
import styles from './HeaderStyles.module.sass'
import { HeaderActions, MHeaderActions } from '../HeaderActions'
import { Link } from 'react-scroll'
import clsx from 'clsx'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { BurgerMenu } from '@/modules/BurgerMenu/BurgerMenu'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { topAnim, leftAnim } from '@/Animations'

export const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [active, setActive] = useState(false)
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleBurgerActive = () => {
    setActive(true)
    setOpenBurgerMenu(true)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <BurgerMenu
        openBurgerMenu={openBurgerMenu}
        setOpenBurgerMenu={setOpenBurgerMenu}
        active={active}
        setActive={setActive}
      />
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={clsx(styles.header, scroll < 50 ? '' : styles.headerBg)}
      >
        <div className={clsx(styles.container)}>
          <motion.div variants={leftAnim} custom={0.6}>
            <Link to="home" spy={true} smooth={true} offset={50} duration={600} className={styles.header_logos}>
              <Image src="/logo/logo.png" alt="logo" width={32} height={32} />
            </Link>
          </motion.div>

          <nav className={styles.nav_menu}>
            <ul className={styles.menu_links}>
              {HeaderLinks.map(({ id, name, href, index }: HeaderLinksProps) => (
                <motion.li variants={topAnim} key={id} custom={index} className={clsx(styles.link_item)}>
                  <Link activeClass={styles.activeLink} to={href} spy={true} smooth={true} offset={-70} duration={600}>
                    {name}
                  </Link>
                </motion.li>
              ))}
              <MHeaderActions />
              <motion.button
                variants={topAnim}
                custom={1}
                onClick={handleBurgerActive}
                className={clsx(styles.nav_menu_burger, active ? styles.nav_menu_burger_active : '')}
                type="button"
              >
                <span></span>
              </motion.button>
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  )
}
