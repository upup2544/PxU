import React from 'react'

import {projectData} from '../../../data/project'
import ProjectCard from './ProjectCard'
import './project.css'

function Project() {
  const data = projectData
  return (
    <div className='projects'>
      
      <div>
        {data.map((project)=>{
          return <ProjectCard project={project}/>
        })}
      </div>
    </div>
  )
}

export default Project