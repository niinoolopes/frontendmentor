import React from 'react'
import imageProfile from '../assets/images/image-jeremy.png'

export default function CardProfile() {
  return (
    <div>
      <img src={imageProfile} alt="Img profile" />
      <span>Report for</span>
      <h2>Jeremy Robson</h2>
    </div>
  )
}
