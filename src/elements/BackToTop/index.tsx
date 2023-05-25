import clsx from 'clsx'
import React from 'react'
import styles from './BackToTopStyles.module.sass'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'

export const BackToTop = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Link
      className={clsx(styles.backToTophidden, scroll < 50 ? '' : styles.backToTopVisible)}
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={600}
    >
      <i className="fa-solid fa-chevron-up" />
    </Link>
  )
}
