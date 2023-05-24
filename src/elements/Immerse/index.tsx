import React from 'react'
import styles from './ImmerseStyles.module.sass'
import { Button } from '../Button'

export const Immerse = () => {
  return (
    <div className={styles.immerse}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div className={styles.immerse_inner}>
            <div className={styles.inner_content}>
              <div className={styles.content_title}>Immerse yourself in your music</div>
              <div className={styles.content_subtitle}>Buy Now, up to 40% off.</div>
              <div>
                <Button component="button" variant="secondary" classNameStyles="button">
                  <span className={styles.btn_icon}>
                    <img src="/icon/bag.png" />
                  </span>
                  Buy now
                </Button>
              </div>
            </div>

            <div className={styles.inner_img}>
              <img src="/immerse/headphone.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
