import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios'
import '../App.css';
import Modal from "../Modal/Modal";
import Creatework from './Creatework'

const Work = () => {
    const [work, setWork] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {

        Axios.get(`http://localhost:8000/works`, {
        }).then((response) => {
            setWork(response.data);
        });

    }, []);


    return (
        <div>
            <div >
                <button onClick={() => setShow(true)}>Create</button>
                <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                    <Creatework />
                </Modal>
            </div>
            <row>
                {work.map((val, key) => {
                    return (
                        <div >
                            <div >
                                <p >Name: {val.workName}</p>
                                <p >ID: {val.workID}</p>
                                <p >start: {val.startDate}</p>
                                <p >end: {val.endDate}</p>
                                <p >ผู้ว่าจ้าง: {val.customerID}</p>
                                <p >ผู้ผลิต: {val.producterID}</p>
                                <p >status: {val.workStatus}</p>
                                <p >หมายเหตุ: {val.workNote}</p>
                            </div>
                        </div>
                    );
                })}
            </row>
        </div>)
};

export default Work;