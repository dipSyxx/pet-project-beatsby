import React from 'react'
import styles from './IntroStyles.module.sass'
import { Typography } from '../Typography'
import { Button } from '../Button'

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro_inner}>
          <div className={styles.inner_img}>
            <img src="/intro/introMainImg.png" alt="mainImgIntro" />
          </div>
          <div className={styles.inner_content}>
            <Typography marginBottom="mb-30" component="h1" variant="h1">
              On ear
            </Typography>
            <Typography marginBottom="mb-70" component="h3" variant="h3">
              Beats 3
            </Typography>
            <Typography marginBottom="mb-30" component="h4" variant="h4">
              Overview
            </Typography>
            <div className={styles.content_text}>
              <Typography marginBottom="mb-40" component="p" variant="subtitle1">
                Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with
                comfortable padded earphones, delivering first-rate playback.
              </Typography>
            </div>

            <Button component="button" variant="primary" classNameStyles="button">
              <div className={styles.button_icon}>
                <img src="/icon/bag.png" alt="bag" />
              </div>
              Add to Bag <span style={{ fontSize: '20px', fontWeight: '700' }}>N399K</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
