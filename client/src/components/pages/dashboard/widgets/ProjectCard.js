import React from 'react'
import './projectCard.css'

function ProjectCard({ project }) {
    return (
        <div className='project-card'>
            <label className='section-title'>CommingUP 🔥</label><br />
            <div className='data '>
                <div className='project-info'>
                    <label className='project-title'>{project.title}</label><br />
                </div>
                <div className='project-dayleft'>
                    <label className='remain'>{project.remain}</label>
                    <label className='dayleft'> Days <br/> Left</label>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard