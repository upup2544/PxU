import React, { useState, useEffect } from "react";
import Axios from 'axios'
import Modal from "../../../Modal/Modal";
import Creatework from './Creatework'
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import './work.css'

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
        <div className="site">
            <div className="H-site">
            <div className='banner'>
                <h1> Works </h1>
            </div>

            <div className='navbar'>
                <div className="navbar-left">

                </div>

                <div className="navbar-right">

                    <form className="search" onsubmit="event.preventDefault();" role="search">
                        <label for="search">Search for stuff</label>
                        <input id="search" type="search" placeholder="Search..." autofocus required />
                        <button type="submit">Go</button>
                    </form>

                    <button className="Createbutton" onClick={() => setShow(true)}>Create</button>

                    <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                        <Creatework />
                    </Modal>
                </div>
            </div>
            <div className="body">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Due Date</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                    {work.map((val, key) => {
                        return (
                            <tr className="itemsRow" >
                                <td>{val.workID}</td>
                                <td>{val.workName}</td>
                                <td>{moment(val.startDate).format("DD-MM-YYYY")}</td>
                                <td>{moment(val.endDate).format("DD-MM-YYYY")}</td>
                                <td>
                                    <td className="menubar">
                                        {/* <td> <button class="bi bi-filetype-pdf" onClick={(e) => {return <ExportPdfComponent/>} }></button>  </td> */}
                                        <td> <a class="bi bi-filetype-pdf" style={{ fontSize: 24 }}  ></a> </td>
                                        <td> <a class="bi bi-file-earmark-word" style={{ fontSize: 24 }}  > </a> </td>
                                        <td> <a class="bi bi-receipt" style={{ fontSize: 24 }} ></a> </td>
                                        <td> <div className="editButt"> <a>Edit</a> </div></td>
                                        <td> <a class="bi bi-trash" style={{ fontSize: 24 }} ></a> </td>
                                    </td>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                    


                </table>
            </div>
            <row>

            </row>

            </div>

        </div>)
};

export default Work;