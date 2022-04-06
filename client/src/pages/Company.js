import React,{ useState, useEffect, useContext } from "react";
import Axios from 'axios'
import '../App.css';
import Modal from "../Modal/Modal";
import CreateCom from './Createcompany'

const Company = () =>{
    const [company, setcompany] = useState([]);
    const [show, setShow] = useState(false);
    useEffect (() => {
            Axios.get(`http://localhost:8000/company`, {
            }).then((response) => {
                setcompany(response.data);
            });
        
    }, []);



    return (
        <div>
          <div >
            <button onClick={() => setShow(true)}>Create</button>
            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
              <CreateCom/>
            </Modal>
          </div>
            <row>
            {company.map((val, key) => {
          return (
            <div >
              <div >
                <p >Name: {val.companyName}</p>
                <p >type: {val.type}</p>
                <p >address: {val.address}</p>
                <p >description: {val.description}</p>
                <p >postcode: {val.postcode}</p>
                <p >contactName: {val.contactName}</p>
                <p >contactNumber: {val.contactNumber}</p>
                <p >contactEmail: {val.contactEmail}</p>
                <p >taxNumber: {val.taxNumber}</p>
                <p >bankName: {val.bankName}</p>
                <p >bankAccount: {val.bankAccount}</p>
                <p >bankAccountName: {val.bankAccountName}</p>
              </div>
            </div>
          );
        })}
            </row>
            </div>)
};

export default Company;