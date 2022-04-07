import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import Modal from "../../../Modal/Modal";
import CreateCom from '../company/Createcompany'

const Createquotation = (value) => {
    var ID=this.value;
    const [show, setShow] = useState(false);
    const [workName, setworkName] = useState([]);
    const [startDate, setstartDate] = useState([]);
    const [endDate, setendDate] = useState([]);
    const [customerID, setcustomerID] = useState([]);
    const [producterID, setproducterID] = useState([]);
    const [workStatus, setworkStatus] = useState(['On process']);
    const [workNote, setworkNote] = useState(['']);
    const [company, setCompany] = useState([]);
    const [workID, setworkID] = useState([]);
    const [price, setprice] = useState(['']);
    const [work, setWork] = useState([]);

    useEffect(() => {

        Axios.get(`http://localhost:8000/work/${ID}`, {
        }).then((response) => {
            setWork(response.data);
        });

    }, []);

    return (
        <div>
            <div className="ga">
                <h2>Create work</h2>
                <div className="aa">
                    <p>ชื่องาน :  </p>
                    <input onChange={(e) => { setworkName(e.target.value) }}></input>
                </div>
                <div className="aa">
                    <p>start :  </p>
                    <input type="date" onChange={(e) => { setstartDate(e.target.value) }}></input>
                </div>
                <div className="aa">
                    <p>end :  </p>
                    <input type="date" onChange={(e) => { setendDate(e.target.value) }}></input>
                </div>
                <div className="aa">
                    <p>ผู้ผลิต :   </p>
            
                </div>
                <div className="aa">
                    <p>หมายเหตุ :  </p>
                    <input onChange={(e) => { setworkNote(e.target.value) }}></input>
                </div>
                <div className="aa">
                    <button >ยืนยัน</button>
                </div>
            </div>
        </div>)
};

export default Createquotation;