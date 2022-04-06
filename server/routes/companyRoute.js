import express from 'express';
import mysql from 'mysql';

const router = express.Router();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pxudatabase",
});

router.get('/', (req, res)=> {

    const sqlSelect = "SELECT * FROM company"
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        res.send(result);
    })
    
});

router.post('/', (req, res) => {
    const companyName = req.body.companyName
    const type = req.body.type
    const address = req.body.address
    const postcode = req.body.postcode
    const contactName = req.body.contactName
    const contactNumber = req.body.contactNumber
    const contactEmail = req.body.contactEmail
    const taxNumber = req.body.taxNumber
    const bankName = req.body.bankName
    const bankAccount = req.body.bankAccount
    const bankAccountName = req.body.bankAccountName
    const description = req.body.description

    const sqlInsert = "INSERT INTO company (companyName,type,address,description,postcode,contactName,contactNumber,contactEmail,taxNumber,bankName,bankAccount,bankAccountName) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [companyName,type,address,description,postcode,contactName,contactNumber,contactEmail,taxNumber,bankName,bankAccount,bankAccountName], (err,result)=>{
        // console.log(result);
        res.send(result);
    }) 
});


export default router;
