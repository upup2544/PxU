import React from 'react'
import './recentlyaddCard.css'

function RecentlyaddCard({ project }) {
    return (
        <div className='recently-card'>
            <label className='section-title'> Recently added</label><br />
            <div className='recently-info'>
                <label className='project-title'>{project.title}</label><br />
            </div>
        </div>
    )
}

export default RecentlyaddCard