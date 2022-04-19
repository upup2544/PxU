import React, { useState, useEffect, useContext } from "react";
import { WorkAuthContext } from "../../works/Work";
import LogoImage from "../../../images/logo.jpg";
import BlueLogo from "../../../images/bluelogo.jpg"
import Axios from 'axios'
import moment from 'moment';


const QuoSectionCom = () => {
    const [customer, setworkcustomer] = useState([]);
    const [producter, setworkproducter] = useState([]);
    const [scope, setscope] = useState([]);
    const workID = useContext(WorkAuthContext);
    useEffect(() => {
        Axios.get(`http://localhost:8000/works/${workID}`, {
        }).then((response) => {
            setworkproducter(response.data[2]);
            setworkcustomer(response.data[1]);
            setscope(response.data[0]);
        });
    }, []);
    return (
        <>
            {customer.map(data => {
                return(<div className="paper" >
                    <div className="paperForm">
                        <div className="header">
                            <div className="comAdd detail">
                                <div className="comadd-box">
                                    <div className="comaddress">
                                        <img src={LogoImage} width="105" height="85" />
                                        <div className="comAddr">
                                            <p>
                                                {data.companyName} <br />
                                                ที่อยู่: {data.address}<br />
                                                เบอร์มือถือ: {data.contactNumber}<br />
                                                เลขผู้เสียภาษี: {data.taxNumber}<br />
                                                อีเมล์: {data.contactEmail}</p>
                                        </div>
                                        <div className="CusAddr">
                                            <p>ลูกค้า วิสาหกิจชุมชนเกษตรผสมผสานสู่การแปรรูปเชิงนวัตกรรม (ข้าวน้ำจำ) <br />
                                                โทร 090-973-2379 (นางสาวธัญลักษณ์  ปิงเมือง)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-com-box">
                                    <div className="QuotationText">
                                        <h5>ใบเสนอราคา</h5>
                                    </div>
                                    <div className="detail-com">
                                        <div className="separator"></div>
                                        <p>เลขที่   F00319<br />
                                            วันที่   <br />
                                            ผู้ขาย  {data.contactName}<br />
                                            เบอร์  {data.contactNumber}</p>
                                        <div className="separator"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-modal">
                            <div className="body-section">
                                <table class="table">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">รายละเอียด</th>
                                            <th scope="col">จำนวน</th>
                                            <th scope="col">ราคาต่อหน่วย</th>
                                            <th scope="col">ราคารวม</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {scope.map((val,index) => {
                                    return(
                                        <tr>{val.text}</tr>
                                    )
                                            
                    
                                    })}
                                    
                               
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="sum">
                            <div className="left-sum">
                                <p> ######### might be text input here ####### </p>
                            </div>
                            <div className="right-sum">
                                <tbody>
                                    <tr className="total-cost">
                                        <td>
                                            รวมเป็นเงิน
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            บาท
                                        </td>
                                    </tr>
                                    <tr className="vat7per">
                                        <td>
                                            ภาษี7%
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            บาท
                                        </td>
                                    </tr>
                                    <tr className="tax3per">
                                        <td>
                                            หัก ฌ ที่จ่าย something%
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            บาท
                                        </td>
                                    </tr>
                                    <tr className="final-cost">
                                        <td>
                                            จำนวนเงินรวมทั้งสิ้น
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            บาท
                                        </td>
                                    </tr>
                                </tbody>
                                <div className="separator"></div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-footer-left">
                                <p>
                                    หมายเหตุ {data.workNote}
                                </p>
                            </div>
                            <div className="modal-footer-right">
                                <img src={BlueLogo} width="105" height="85" />
                            </div>
                        </div>
                        <div className="sign">
                            <div className="customer-sign">
                                <div className="customer-sign-name">
                                    <p> ในนาม .......</p>
                                </div>
                                <div className="signbox">
                                    <input className="sign-box"></input>
                                </div>
                                <div>
                                    <p>ผู้ว่าจ้าง </p>
                                    <p>...../...../.....</p>
                                </div>
                            </div>
                            <div className="company-sign">
                                <div className="company-sign-name">
                                    <p> ในนาม {data.companyName}</p>
                                </div>
                                <div className="company-sign-box">
                                    <input className="sign-box"></input>
                                </div>
                                <div>
                                    <p>ผู้อนุมัติ </p>
                                    <p> dd/mm/yyyy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                                }
            )}
        </>

    );
}

export default QuoSectionCom;