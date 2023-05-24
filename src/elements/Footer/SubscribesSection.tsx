import React from 'react'
import styles from './FooterStyles.module.sass'

export const SubscribesSection = () => {
  return (
    <>
      <div className={styles.subscribes}>
        <form className={styles.subscribes_form}>
          <input placeholder="Email" className={styles.form_input} />
          <button type="submit" className={styles.form_btn}>
            <img src="/icon/send.png" alt="send" />
            <span>Subscribe</span>
          </button>
        </form>
        <ul className={styles.socials_list}>
          <a className={styles.item_link} href="/" target="_blank">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a className={styles.item_link} href="/" target="_blank">
            <i className="fa-brands fa-twitter" />
          </a>
          <a className={styles.item_link} href="/" target="_blank">
            <i className="fa-brands fa-instagram" />
          </a>
          <a className={styles.item_link} href="/" target="_blank">
            <i className="fa-brands fa-linkedin" />
          </a>
        </ul>
      </div>
    </>
  )
}
