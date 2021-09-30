import React from 'react'
import { ITrack } from '../types'
import styles from '../assets/css/Track.module.css'

import iconWord from '../assets/icons/icon-work.svg'
import iconStudy from '../assets/icons/icon-study.svg'
import iconSocial from '../assets/icons/icon-social.svg'
import iconPlay from '../assets/icons/icon-play.svg'
import iconExercise from '../assets/icons/icon-exercise.svg'
import iconSelfCare from '../assets/icons/icon-self-care.svg'

export default function CardTracks() {
  const tracks: ITrack[] = [
    { id: 1, Icon: iconWord, type: 'work', name: 'Work', duration: '32hrs', lastWeek: '36hrs' },
    { id: 2, Icon: iconPlay, type: 'play', name: 'Play', duration: '10hrs', lastWeek: '8hrs' },
    { id: 3, Icon: iconStudy, type: 'study', name: 'Study', duration: '4hrs', lastWeek: '7hrs' },
    { id: 4, Icon: iconExercise, type: 'exercise', name: 'Exercise', duration: '4hrs', lastWeek: '5hrs' },
    { id: 5, Icon: iconSocial, type: 'social', name: 'Social', duration: '5hrs', lastWeek: '10hrs' },
    { id: 6, Icon: iconSelfCare, type: 'self-care', name: 'Self Care', duration: '2hrs', lastWeek: '2hrs' },
  ]

  return (
    <>
      {
        tracks?.map(({ id, Icon, type, name, duration, lastWeek }: ITrack, i) => (
          <div
            className={`card ${styles.track}`}
            key={id}
          >
            <div
              className={`track-${type} ${styles.header}`}
            >
              <img src={Icon} alt={`Icon ${type}`} />
            </div>

            <div className={`${styles.body} ${i === 0 ? styles.body_active : ''}`}>
              <span className={styles.name}>{name}</span>
              <p className={styles.duration}>{duration}</p>
              <p className={styles.lastWeek}>Last Week - {lastWeek}</p>
              <button className={styles.actions}>...</button>
            </div>
          </div>
        ))
      }
    </>
  )
}
