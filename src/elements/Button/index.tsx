/* eslint-disable react/display-name */
import clsx from 'clsx'
import { createElement, FC, forwardRef, ReactNode } from 'react'

import styles from './Button.module.sass'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode
  component: 'button' | 'a'
  variant: 'primary' | 'secondary' | 'header_btn' | 'buy_btn'
  classNameStyles: string
  href?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, component, variant = 'primary', classNameStyles, href, type = 'button', disabled, onClick }, ref) => {
    return createElement(
      component,
      {
        onClick,
        href,
        type,
        ref,
        disabled,
        className: clsx(styles.button, styles[classNameStyles], styles[variant]),
      },
      children,
    )
  },
)

export const MButton = motion(Button)
