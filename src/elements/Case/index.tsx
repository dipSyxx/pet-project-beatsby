import React from 'react'
import styles from './CaseStyles.module.sass'
import { Typography } from '../Typography'
import { Button } from '../Button'

export const Case = () => {
  return (
    <div className={styles.case}>
      <Typography marginBottom="mb-70" variant="h2" component="h2">
        Case
      </Typography>
      <div className={styles.container}>
        <div className={styles.case_inner}>
          <div className={styles.inner_img}>
            <img src="/case/case.png" alt="case" />
          </div>
          <div className={styles.inner_content}>
            <Typography variant="subtitle1" component="p">
              With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability
              forever.
            </Typography>
            <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <Button component="a" variant="primary" classNameStyles="button" href="/">
                <span className={styles.btn_icon}>
                  <img src="/case/icon.svg" alt="icon" />
                </span>
                More info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
