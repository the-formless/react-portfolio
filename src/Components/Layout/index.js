import React from 'react'
import './index.scss'
import pic from '../../assets/CV.png'
import { Link, useLocation } from 'react-router-dom'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

function Layout(props) {
  const location = useLocation();
  return (
    <div className='layout'>
      <nav>
        <div className='profile-picture'>
          <Link to={'/'}><img src={pic} alt="Vandit Narain Tyagi" /><p>vandit.xyz</p></Link>
          
        </div>
          <div className='links'>
            <Link to={'/projects'} className={(location.pathname === '/projects')? 'a-active' : ''}>Projects</Link>
            <Link to={'/skills'} className={(location.pathname === '/skills')? 'a-active' : ''}>Skills</Link>
            <Link to={'/about'} className={(location.pathname === '/about')? 'a-active' : ''}>About</Link>
            <Link to={'/contact'} className={(location.pathname === '/contact')? 'a-active' : ''}>Contact</Link>
          </div>
          <div className='social-links'>
            <a href='https://github.com/the-formless' target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href='https://www.linkedin.com/in/vandit-narain/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
          </div>
      </nav>
      <div className='app-content'>
        {props.children}
      </div>
      
    </div>
  )
}

export default Layout