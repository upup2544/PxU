import React from 'react'
import Project from './widgets/Project'
import './dashboard.css'
import Recentlyadd from './widgets/Recentlyadd'
import ProjectTable from './widgets/ProjectTable'

function Dashboard() {
  return (
    <div className='Container'>
      <div className='ProjectTile'>
          <Project></Project>
      </div>
      <div className='Lower-tile' >
        <div className='left-lower-tile'>
          <Recentlyadd></Recentlyadd>
        </div>
        <div className='right-lower-tile'>
          <ProjectTable></ProjectTable>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard