import React from 'react'
import imageProfile from '../assets/images/image-jeremy.png'
import styles from '../assets/css/Profile.module.css'

export default function CardProfile() {
  console.log(styles);

  return (
    <section className='card card_profile'>

      <div className={`card ${styles.profile}`}>
        <div className={styles.profileImg}>
          <img src={imageProfile} alt="Img profile" />
        </div>
        <span>Report for</span>
        <h2>Jeremy Robson</h2>
      </div>

      <ul className={styles.menu}>
        <li className={`${styles.menu_item} ${styles.menu_active}`}>Daily</li>
        <li className={`${styles.menu_item}`}>Weekly</li>
        <li className={`${styles.menu_item}`}>Monthly</li>
      </ul>
    </section>
  )
}
