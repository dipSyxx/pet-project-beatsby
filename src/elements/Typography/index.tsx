import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

import styles from './typographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1'
  marginBottom?: 'mb-70' | 'mb-40' | 'mb-30' | 'mb-8'
  colorVariant?: 'gray'
}

export const Typography: FC<TypographyProps> = ({
  children,
  component = 'h1',
  variant = 'h1',
  marginBottom = '',
  colorVariant = '',
}) => {
  return createElement(
    component,
    {
      className: clsx(styles.typography, styles[variant], styles[marginBottom], styles[colorVariant]),
    },
    children,
  )
}
