import React from 'react'
import {RecentlyAdd} from '../../../data/recentlyadd'
import RecentlyaddCard from './RecentlyaddCard'
import './recentlyadd.css'


function Recentlyadd() {
    const data = RecentlyAdd
    return (
        <div className='projects'>
            {data.map((project) => {
                return <RecentlyaddCard project={project}/>
            })}
        </div>
    )
}

export default Recentlyadd