/* eslint-disable react/display-name */
import clsx from 'clsx'
import { createElement, ElementType, FC, forwardRef, ReactNode } from 'react'

import styles from './typographyStyles.module.sass'
import { motion } from 'framer-motion'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1'
  marginBottom?: 'mb-70' | 'mb-40' | 'mb-30' | 'mb-8'
  colorVariant?: 'gray'
}

export const Typography: FC<TypographyProps> = forwardRef(
  ({ children, component = 'h1', variant = 'h1', marginBottom = '', colorVariant = '' }, ref) => {
    return createElement(
      component,
      {
        ref,
        className: clsx(styles.typography, styles[variant], styles[marginBottom], styles[colorVariant]),
      },
      children,
    )
  },
)

export const MTypography = motion(Typography)
