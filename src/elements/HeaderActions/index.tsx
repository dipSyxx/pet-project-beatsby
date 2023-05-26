/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Button } from '../Button'
import styles from '../Header/HeaderStyles.module.sass'
import { motion } from 'framer-motion'
import { topAnim } from '@/Animations'

export const HeaderActions = forwardRef(() => {
  return (
    <>
      <motion.div variants={topAnim} custom={1.6} className={styles.actionButton}>
        <Button component="button" variant="header_btn" classNameStyles="button">
          Shop
        </Button>
      </motion.div>
    </>
  )
})
export const MHeaderActions = motion(HeaderActions)
