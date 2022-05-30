import React from 'react'
import Images from './imagesContainer'

function ProjectCard({valObj}) {
  return (
    <div className='project'>
      <h3>{valObj.title}</h3>
      {/* <img src={valObj.img} alt={valObj.title} /> */}
      <Images images={valObj.images} projectName={valObj.title}/>
      <p className='description'><ul>{valObj.description.map((v, i)=> <li key={i}>{v}</li>)}</ul></p>
      <div className='technologies'>
        {valObj.technologies.map((v, i)=> 
          <div className='technology' key={i}>
            <h1>{v.icon}</h1>
            <p>{v.text}</p>
          </div>
        )}
      </div>
      <div className='project-links'>
          {valObj.link && <a href={valObj.link} target='_blank' rel="noreferrer">View Live</a>}
          {valObj.github && <a href={valObj.github} target='_blank' rel="noreferrer">View Code</a>}
          {valObj.blog && <a href={valObj.blog} target='_blank' rel="noreferrer">View Blog</a>}
      </div>
    </div>
  )
}

export default ProjectCard