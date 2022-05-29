import React from 'react'
import './index.scss'
import {FaAngleDoubleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='home-page'>
      <div className='intro'>
        <p>Hi, my name is:</p>
        <h1>Vandit</h1>
        <h5>and I'm a Software Developer.</h5>
      </div>
      <div className='cta-icon'>
        <FaAngleDoubleRight />
      </div>
      <Link to='/projects'>View my Work</Link>
    </div>
  )
}

export default Home