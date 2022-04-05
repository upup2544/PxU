import React from 'react'


import './sidebar.css'
import { Sidebardata } from './Sidebardata'
function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
                <div className='profilebox'><li className='profilePic'> LOGO </li></div>
                {Sidebardata.map((val, key) => {
                    return (
                        <li key={key}
                            className='items'
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}>
                            {" "}
                            <div>{val.icon}</div>
                            <div>{val.title}</div>

                        </li>
                    )
                })}
            </ul>


        </div>
    )
}

export default Sidebar

