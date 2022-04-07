import React, { useState, useEffect,useContext } from "react";
import { AuthContext } from "../quotation/Quotation";
import Axios from 'axios'

const TableComponent =()=>{
    const [quo, setQuo] = useState([]);
    const quotationID  = useContext(AuthContext);
    useEffect(() => {
        Axios.get(`http://localhost:8000/quotation/${quotationID}`, {
        }).then((response) => {
          setQuo(response.data);
        });
      }, []);

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Image</th>
                    </tr>
                </thead><tbody>
                {quo.map((val)=>{
return(<tr>
                        <td>{val.quotationDate}</td>
                        <td>{val.workName}</td>
                        <td>john@example.com</td>
                        <td>
                            <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
                        </td>
                    </tr>)
                    
   
                })} <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <td>
                            <img src="https://i.pravatar.cc/50?img=2" alt="thumb" />
                        </td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>
                            <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    
}

export default TableComponent;