import React from 'react'
import './index.scss'
import sideImg from './assets/about_small.jpg'

function About() {
  return (
    <div className='about-page'>
      <div className='about-content'>
        <h1>My name is Vandit Narain Tyagi</h1>
      </div>
      <div className='about-img'>
        <img src={sideImg} alt="Vandit performing a headstand at the beach" />
      </div>
    </div>
  )
}

export default About