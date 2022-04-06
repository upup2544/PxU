import React,{ useState, useEffect} from "react";
//import { projectTableData } from '../../../data/projectTable'
import './projectTable.css'
import axios from 'axios'
import moment from 'moment';
//import TableView from 'react-table-view'

function ProjectTable() {
    const [prj, setprj] = useState([]);
    useEffect(() => {
    axios.get('http://localhost:8000/', {
    }).then((response) => {
        setprj(response.data[2]);
    });
    }, []);
    //const data = projectTableData
    return (
        <div className='card-tile'>
            <label className='section-title'> see what coming up 📅</label>
            <div className='column-tile'>
                {prj.map((project) => {
                    return (<div className='list-project'>
                        <div className='prroject-title'>{project.workName}</div>   
                        <div className='prroject-date'>{moment(project.endDate).format("MM/DD/YYYY")}</div>
                    </div>);
                })}
            </div>
        </div>
    )
}

export default ProjectTable