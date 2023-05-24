/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Button } from '../Button'
import styles from '../Header/HeaderStyles.module.sass'
// import { motion } from 'framer-motion'

export const HeaderActions = forwardRef(() => {
  return (
    <>
      <div className={styles.actionButton}>
        <Button component="button" variant="header_btn" classNameStyles="button">
          Shop
        </Button>
      </div>
    </>
  )
})
// export const MHeaderActions = motion(HeaderActions)
