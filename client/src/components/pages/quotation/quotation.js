import React, { useState, useEffect } from "react";
import './quotation.css'
import axios from 'axios'
import moment from 'moment'
import ExportPdfComponent from "../createpdf/ExportPdf";
import Modal  from "react-modal";
import { Button } from "bootstrap";

const Quotation = () => {
  const [quo, setQuo] = useState([]);
  const [active, setActive] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/quotation', {
    }).then((response) => {
      setQuo(response.data);
    });
  }, []);

  return (
    <div className='site'>

      <div className='banner'>
        <h1> Quotation </h1>
      </div>


      <div className='navbar'>
        <div className="navbar-left">
          im a left box
        </div>
        <div className="navbar-right">
          im gonna be search box
        </div>
      </div>



      <div className='body'>
        {/*         {quo.map((items) =>{
          return( <p> {items.workName} </p>)
        })} */}
        <table class="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Customer name</th>
            </tr>
          </thead>
          <tbody>
            {quo.map((items) => {
              return (
                <tr className="itemsRow">
                  <td scope="row">{items.workID}</td>
                  <td>{items.workName}</td>
                  <td>{moment(items.quotationDate).format("DD-MM-YYYY")}</td>
                  <td>{items.customerID}</td>
                  <td>
                    <td className="menubar">
                      {/* <td> <button class="bi bi-filetype-pdf" onClick={(e) => {return <ExportPdfComponent/>} }></button>  </td> */}
                      <td> <a class="bi bi-filetype-pdf" style={{ fontSize: 24 }} onClick={() => setActive("CreatePDF")} ></a> </td>
                      <td> <a class="bi bi-file-earmark-word" style={{ fontSize: 24 }} onClick={() => setActive("CreateDOCS")} > </a> </td>
                      <td> <a class="bi bi-receipt" style={{ fontSize: 24 }} onClick={() => setActive("openReceipt")} ></a> </td>
                      <td> <div className="editButt"> <a>Edit</a> </div></td>
                      <td> <a class="bi bi-trash" style={{ fontSize: 24 }} onClick={() => setActive("Delete")}></a> </td>
                    </td>
                  </td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default Quotation