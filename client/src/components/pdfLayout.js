import React, { useDebugValue } from "react";
import './pages/createpdf/createpdf.css'
import LogoImage from "./images/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function PdfLayout() {
    //onst dataW1 = prj
    return (
        <div className="paper">
            <div className="paperForm">
                <div className="header">
                    <div className="Com-Logo Quotation">
                        <div className="Logocom">
                            <img src={LogoImage} width="170" height="150" />
                        </div>
                        <div className="QuotationText">
                            <h3>ใบเสนอราคา</h3>
                        </div>
                    </div>
                    <div className="comAdd detail">
                        <div className="comaddress">
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
                        <div className="detail-com">
                            <p>เลขที่   F00319<br />
                                วันที่   15/12/2563<br />
                                ผู้ขาย  นายมิกิ อาษาวงค์<br />
                                เบอร์  0618096661</p>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="body-section">
                        <table class="table">
                            <thead class="thead-dark">
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
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="sign">
                    .
                </div>
            </div>

        </div>
    );
}
//} 
export default PdfLayout