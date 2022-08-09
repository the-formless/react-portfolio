import React from 'react'
import './index.scss'
import sideImg from './assets/about_small.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about-page'>
      <div className='about-content'>
        <h1>Welcome to my story</h1>
        <div className='about-text'>
          <p>
            My passion for developing software started at a very early age. Video games fascinated me and I was curious about how it all goes together behind the screen. It was the interactivity that games provided which hooked me.
          </p>
          <p>
            Now I build all sorts of interactive media. I've been working as a freelancer over the past couple years. My current tech stack includes React and Typescript. Previously, I've used Unity and C# to develop and publish mobile as well as WebGL games. I have also developed full stack android applications using Java.
          </p>
          <p>
            Currently, I'm based in Goa and I'm looking for a remote <em>Frontend Developer</em> role.
          </p>
          <p>
            With emotional intelligence and the ability to reflect on myself, I'll be a very good addition to your team! If I have piqued your interest, send me a message:
          </p>
        </div>
        </div>
        <Link className='contact-link' to='/contact'>Send a message</Link>
      <div className='about-img'>
        <img src={sideImg} alt="Vandit performing a headstand at the beach" />
      </div>
    </div>
  )
}

export default About