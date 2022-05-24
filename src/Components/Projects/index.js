import React from 'react'
import './index.scss'
import ProjectCard from './Components/projectCard'
import { projects } from './projectsData'


function Projects() {
  return (
    <div className='projects'>
      {projects.map((v,i) => <ProjectCard valObj={v} key={i}/>)}
    </div>
  )
}

export default Projects