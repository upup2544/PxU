import React, { useState } from 'react';
import './work.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuotationModal from '../../modal/quotation/QuotationModal';

function Works() {
  const [show, setShow] = useState(false)
  return (
    <div className='Containter-works'>

      <div className='content-works'>
        <div className='section title'>
          <h1> WORKS </h1>
        </div>
        <div className='upper-tab'>
        </div>
        <div className='table table-striped'>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">   </th>
              </tr>
            </thead>
            <tbody>
              <tr> 
                 {/* <!-- wait for loop in database  --> */}
                <th scope="row">1</th>
                <td>Project 1</td>
                <td>01/01/2029</td>
                <td>01/01/2029</td>
                <td>
                  <a class="bi bi-pencil-square" style={{ fontSize: 24 }}></a>
                  <a class="bi bi-filetype-pdf" style={{ fontSize: 24 }}></a>
                  <a class="bi bi-file-earmark-word" style={{ fontSize: 24 }}></a>
                  <div>
                    <a onClick={() => setShow(true)} class="bi bi-send" style={{ fontSize: 24 }}></a>
                  </div>
                  <a class="bi bi-trash3" style={{ fontSize: 24 }}></a>
                </td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <QuotationModal title='My Modal' onClose={()=> setShow(false)}  show={show}>
        <p>This is modal body</p>
      </QuotationModal>

    </div>


  )
}

export default Works