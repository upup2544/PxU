import express from 'express';
import mysql from 'mysql';

const router = express.Router();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pxudatabase",
});

router.get('/', (req, res) => {
    const sqlQuotation = "SELECT * FROM quotation as q , work as w  WHERE q.workID = w.workID ";
    
    db.query(sqlQuotation, (err, sqlQuotationRe) => {
        if(err) throw err;
        // console.log(sqlQuotationRe);
        res.send(sqlQuotationRe);
    })
})

router.delete('/', (req, res) => {
    const quotationID = req.body.quotationID;
    console.log(quotationID);
    const sqlDelete = "DELETE FROM quotation WHERE quotationID=?";
    db.query(sqlDelete,[quotationID],(err, sqlQuotation) => {
        if(err) throw err;
        console.log(quotationID);
    })
})

export default router;