import React,{ useState, useEffect} from "react";
//import {projectData} from '../../../data/project'
import ProjectCard from './ProjectCard'
import './project.css'
import axios from 'axios'


const Pject = () => {
  const [prj, setprj] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/', {
    }).then((response) => {
      setprj(response.data[1]);
    });
  }, []);

  //function Project({project}) {
  // prv
  return (
    <div className='projects'>

      <div>
          {prj.map((val,key) => {
          return <ProjectCard project={val} />
        })}
        
      </div>
    </div>
  )


}

export default Pject