import React,{ useState, useEffect, useContext } from "react";
import Axios from 'axios'
import '../App.css';

const Feed = () =>{
    const [companyName, setcompanyName] = useState([]);
    const [type, settype] = useState([]);
    const [address, setaddress] = useState([]);
    const [description, setdescription] = useState([]);
    const [postcode, setpostcode] = useState([]);
    const [contactName, setcontactName] = useState([]);
    const [contactNumber, setcontactNumber] = useState([]);
    const [contactEmail, setcontactEmail] = useState([]);
    const [taxNumber, settaxNumber] = useState([]);
    const [bankName, setbankName] = useState([]);
    const [bankAccount, setbankAccount] = useState([]);
    const [bankAccountName, setbankAccountName] = useState([]);

    const submit = () => {     
      Axios.post("http://localhost:8000/createcompany",{
        companyName:companyName,
        type:type,
        address:address,
        description:description,
        postcode:postcode,
        contactName:contactName,
        contactNumber:contactNumber,
        contactEmail:contactEmail,
        taxNumber:taxNumber,
        bankName:bankName,
        bankAccount:bankAccount,
        bankAccountName:bankAccountName,
      }).then((response) =>{
        alert(" create company success");
        window.location.href="/company";
      })
  };


    return (
        <div>
          <div className="ga">
            <h2>Create Company</h2>
            <div className="aa">
              <p>ชื่อบริษัท :  </p>
              <input onChange={ (e) => { setcompanyName(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>รูปแบบ :   </p>
              <select class="dropdown" onChange={ (e) => { settype(e.target.value) }}>
                <option>เลือกรูปแบบ</option>
                <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
                <option value="นิติบุคคล">นิติบุคคล</option>
              </select>
            </div>
            <div className="aa">
              <p>ที่อยู่ :  </p>
              <input onChange={ (e) => { setaddress(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>หมายเหตุ :  </p>
              <input onChange={ (e) => { setdescription(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>เลขไปรษณีย์ :  </p>
              <input onChange={ (e) => { setpostcode(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>เลขผู้เสียภาษี :  </p>
              <input onChange={ (e) => { settaxNumber(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>ชื่อผู้ติดต่อ :  </p>
              <input onChange={ (e) => { setcontactName(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>หมายเลขโทรศัพท์ผู้ติดต่อ :  </p>
              <input onChange={ (e) => { setcontactNumber(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>email :  </p>
              <input onChange={ (e) => { setcontactEmail(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>ชื่อธนาคาร :  </p>
              <input onChange={ (e) => { setbankName(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>บัญชีธนาคาร :  </p>
              <input onChange={ (e) => { setbankAccount(e.target.value) }}></input>
            </div>
            <div className="aa">
              <p>ชื่อบัญชีธนาคาร :  </p>
              <input onChange={ (e) => { setbankAccountName(e.target.value) }}></input>
            </div>
            <div className="aa">
              <button onClick={ () =>{submit()} }>ยืนยัน</button>
            </div>
            </div>
            </div>)
};

export default Feed;