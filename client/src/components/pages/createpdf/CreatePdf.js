import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../quotation/Quotation";
import Axios from 'axios'
import LogoImage from "../../images/logo.jpg";
import BlueLogo from "../../images/bluelogo.jpg"
import './createpdf.css'

const TableComponent = () => {
    const [quo, setQuo] = useState([]);
    const quotationID = useContext(AuthContext);
    useEffect(() => {
        Axios.get(`http://localhost:8000/quotation/${quotationID}`, {
        }).then((response) => {
            setQuo(response.data);
        });
    }, []);
    return (
        <div className="paper" >
            <div className="paperForm">
                <div className="header">
                    <div className="comAdd detail">
                        <div className="comadd-box">
                            <div className="comaddress">
                                <img src={LogoImage} width="105" height="85" />
                                <div className="comAddr">
                                    <p>หจก.อินฟินิตี้ ฟีโนมีนอล ซอฟท์แวร์ (Infinity Phenomenal Software) <br />
                                        ที่อยู่ 633/144 หมู่บ้านกาญจน์กนกทาวน์โฮม4 ต.หนองจ๊อม<br />
                                        อ.สันทราย จ.เชียงใหม่ 50210 , เบอร์มือถือ 061-809-6661<br />
                                        เลขผู้เสียภาษี : 0503561005794<br />
                                        อีเมล์ : infinityp.soft@gmail.com</p>
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
                                    วันที่   15/12/2563<br />
                                    ผู้ขาย  นายมิกิ อาษาวงค์<br />
                                    เบอร์  0618096661</p>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>ค่าพัฒนาระบบ</td>
                                    <td>1</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>ค่าอุปกรณ์</td>
                                    <td>1</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
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
                            หมายเหตุ ################
                        </p>
                    </div>
                    <div className="modal-footer-right">
                        <img src={BlueLogo} width="105" height="85" />
                    </div>
                </div>
                <div className="sign">
                    <div className="customer-sign">
                        <div className="customer-sign-name">
                            <p> ในนาม .........................</p>
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
                            <p> ในนาม .........................</p>
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
    );

}

export default TableComponent;