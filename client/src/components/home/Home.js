import React from 'react'

import Sidebar from "../sidebar/Sidebar"
import "./home.css"

function Home() {
    console.log("Call home ")
    return (
        <div className='home'> 
            <div>
                <Sidebar/>
            </div>
        </div> 
    )
}   
export default Home