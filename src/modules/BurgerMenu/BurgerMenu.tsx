import clsx from 'clsx'
import React from 'react'

import styles from './BurgerMenuStyle.module.sass'
import { HeaderLinks, HeaderLinksProps } from '@/data/HeaderLinks'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { Button, MButton } from '@/elements/Button'
import { motion } from 'framer-motion'
import { leftAnim, scaleAnim } from '@/Animations'

type BurgerMenuProps = {
  openBurgerMenu: boolean
  setOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void
  active: boolean
  setActive: (isActive: boolean) => void
}

export const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu, active, setActive }: BurgerMenuProps) => {
  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
    setActive(false)
  }

  return (
    <>
      {/* Задній план ===============*/}
      <div
        className={clsx(styles.burger_holder, openBurgerMenu ? styles.show_burger : '')}
        onClick={handleCloseBurgerMenu}
      ></div>
      {/* Задній план ===============*/}
      {/* Контентна частина ================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={clsx(styles.burger_window, openBurgerMenu ? styles.burger_window_show : '')}
      >
        <motion.div variants={scaleAnim} custom={0.5} className={styles.burger_menu_header}>
          {/* header */}
          <Image src="/logo/logo.png" alt="logo" width={32} height={32} />
          <div className={styles.header_text}>Menu</div>
          <button className={styles.burger_close} onClick={handleCloseBurgerMenu}>
            X
          </button>
        </motion.div>

        <div className={styles.burger_menu_body}>
          <ul className={styles.menu_links}>
            {HeaderLinks.map(({ id, name, href, index }: HeaderLinksProps) => (
              <motion.li variants={leftAnim} custom={index} key={id} className={clsx(styles.link_item)}>
                <Link
                  onClick={handleCloseBurgerMenu}
                  activeClass={styles.activeLink}
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={600}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
            <div className={styles.burger_menu_btn}>
              <MButton
                variants={leftAnim}
                custom={1.6}
                component="button"
                variant="header_btn"
                classNameStyles="button"
              >
                Shop
              </MButton>
            </div>
          </ul>
        </div>
      </motion.div>
      {/* Контентна частина ================== */}
    </>
  )
}
