import React, { useState, useEffect,useContext } from "react";
import './quotation.css'
import Axios from 'axios'
import moment from 'moment'
import ExportPdfComponent from "../createpdf/ExportPdf";
import Modal from "../../../Modal/Modal";
import PDF from "../createpdf/ExportPdf"
import Receipts from "../receipts/Receipts";
import Company from "../company/Company";
import { Button } from "bootstrap";
const AuthContext = React.createContext();

const Quotation = () => {
  const [count, setcount] = useState([]);
  const [quo, setQuo] = useState([]);
  const [CreateDOCS, setCreateDOCS] = useState(false);
  const [CreatePDF, setCreatePDF] = useState(false);
  const [openReceipt, setopenReceipt] = useState(false);
  const [qID, setQuotationID] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/quotation', {
    }).then((response) => {
      setQuo(response.data);
    });
  }, []);

  const deleteQuotation = (ID) => {
    if (window.confirm("Do you want to delete this?")) {
      Axios.delete(`http://localhost:8000/quotation/${ID}`)
      window.location.reload(false);
    }
  }



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
                      <td> <a class="bi bi-filetype-pdf" style={{ fontSize: 24 }} onClick={() => {
                        setCreatePDF(true);
                        setcount(items.quotationID);
                      }}><Modal title="ใบเสนอราคาPDF" onClose={() => setCreatePDF(false)} show={CreatePDF}>
                        <AuthContext.Provider value={count}>
                          <PDF/>
                        </AuthContext.Provider>
                        </Modal></a> </td>
                      <td> <a class="bi bi-file-earmark-word" style={{ fontSize: 24 }} onClick={() => {
                        setCreateDOCS(true);
                      }} ><Modal title="ใบเสนอราคาDOC" onClose={() => setCreateDOCS(false)} show={CreateDOCS}>
                          <Company />
                        </Modal></a> </td>
                      <td> <a class="bi bi-receipt" style={{ fontSize: 24 }} onClick={() => {
                        setopenReceipt(true);
                      }} ></a><Modal title="ใบเสร็จ" onClose={() => setopenReceipt(false)} show={openReceipt}>
                          <Receipts />
                        </Modal></td>
                      <td> <div className="editButt"> <a>Edit</a> </div></td>
                      <td> <button class="bi bi-trash butdelete" style={{ fontSize: 24 }} onClick={() => { deleteQuotation(items.quotationID) }}></button> </td>
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

export { AuthContext };

export default Quotation