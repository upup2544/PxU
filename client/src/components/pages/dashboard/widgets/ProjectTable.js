import React from 'react'

import { projectTableData } from '../../../data/projectTable'
import './projectTable.css'
import TableView from 'react-table-view'

function ProjectTable() {
    const data = projectTableData
    return (
        <div className='card-tile'>
            <label className='section-title'> see what comming up 📅</label>
            <div className='column-tile'>
                {data.map((project) => {
                    return (<div className='list-project'>
                         <div className='prroject-title'>{project.title}</div>   
                         <div className='prroject-date'>{project.date}</div>
                    </div>);
                })}
            </div>
        </div>
    )
}

export default ProjectTable