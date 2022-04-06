import React,{ useState, useEffect} from "react";
//import { RecentlyAdd } from '../../../data/recentlyadd'
import RecentlyaddCard from './RecentlyaddCard'
import './recentlyadd.css'
import axios from 'axios'

const RecentPrj = () => {
    const [Reprj, setReprj] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/', {
        }).then((response) => {
            setReprj(response.data[0]);
        });
    }, []);
    //function Recentlyadd() {}
    //const data = RecentlyAdd
    return (

        <div className='projects'>
            <div>
                {Reprj.map((val,key) => {
                    return <RecentlyaddCard project={val} />
                })}
            </div>
            
        </div>
    )
}

export default RecentPrj