import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios'
import '../App.css';

const Creatework = () => {

    const [workName, setworkName] = useState([]);
    const [startDate, setstartDate] = useState([]);
    const [endDate, setendDate] = useState([]);
    const [customerID, setcustomerID] = useState([]);
    const [producterID, setproducterID] = useState([]);
    const [workStatus, setworkStatus] = useState(['On process']);
    const [workNote, setworkNote] = useState(['']);
    const [company, setCompany] = useState([]);
    const [workID, setworkID] = useState([]);
    const [text, settext] = useState([]);
    const [price, setprice] = useState(['']);

    useEffect(() => {

        Axios.get(`http://localhost:8000/company`, {
        }).then((response) => {
            setCompany(response.data);
        });
      

    }, []);

    const submitWork = () => {
        Axios.post("http://localhost:8000/works", {
            workName: workName,
            startDate: startDate,
            endDate: endDate,
            customerID: customerID,
            producterID: producterID,
            workStatus: workStatus,
            workNote: workNote,
        }).then((response) => {
            alert(" create work success");
        })
    };

    // const submitdetail = () => {
    //     Axios.post("http://localhost:8000/detail", {
    //         workID: workID+1,
    //         text: text,
    //         price: price,
    //     }).then((response) => {
    //         alert(" create detail success");
    //     })
    // };


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
                    <p>ผู้ว่าจ้าง :   </p>
                    <select class="dropdown" onChange={(e) => { setcustomerID(e.target.value) }}>
                        <option >
                            โปรดเลือกบริษัท
                        </option>
                        {company.map((val, key) => {
                            return (
                                <option value={val.companyID}>
                                    Name: {val.companyName}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="aa">
                    <p>ผู้ผลิต :   </p>
                    <select class="dropdown" onChange={(e) => { setproducterID(e.target.value) }}>
                        <option >
                            โปรดเลือกบริษัท
                        </option>
                        {company.map((val, key) => {
                            return (
                                <option value={val.companyID}>
                                    Name: {val.companyName}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {/* <div>
                <p>scope :  </p>
                    <table>
                        <tr>
                            <td>
                                <input onChange={(e) => { settext(e.target.value) }} />
                                    </td>
                                    <td>
                                        <button onClick={() => { submitdetail() }}></button>
                                    </td>
                                 </tr>
                                 </table>
                
                </div> */}
                <div className="aa">
                    <p>หมายเหตุ :  </p>
                    <input onChange={(e) => { setworkNote(e.target.value) }}></input>
                </div>
                <div className="aa">
                    <button onClick={() => { submitWork() }}>ยืนยัน</button>
                </div>
            </div>
        </div>)
};

export default Creatework;