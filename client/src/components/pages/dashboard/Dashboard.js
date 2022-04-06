import React,{ useState, useEffect} from "react";
import Project from './widgets/Project'
import './dashboard.css'
import Recentlyadd from './widgets/Recentlyadd'
import ProjectTable from './widgets/ProjectTable'


/* const Pject = ()=>{
  const [prj, setprj] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/dashboard', {
    }).then((response) => {
      setprj(response.data);
    });
  }, []); */

function Dashboard() {

    //onst dataW1 = prj
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
//} 
export default Dashboard