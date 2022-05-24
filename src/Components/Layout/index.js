import React from 'react'
import './index.scss'
import pic from '../../assets/CV.png'
import { Link } from 'react-router-dom'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

function Layout(props) {
  return (
    <div className='layout'>
      <nav>
        <Link to='/' className='profile-picture'><img src={pic} alt="Vandit's Profile Picture" /></Link>
        <div className='links'>
          <Link to='/projects'>Projects</Link>
          <Link to='/skills'>Skills</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='social-links'>
          <a href='https://github.com/the-formless' target='_blank'><BsGithub /></a>
          <a href='https://www.linkedin.com/in/vandit-narain/' target='_blank'><BsLinkedin /></a>
        </div>
      </nav>
      <div className='app-content'>
        {props.children}
      </div>
      
    </div>
  )
}

export default Layout