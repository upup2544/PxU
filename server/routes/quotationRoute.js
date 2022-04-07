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

router.get('/:id', (req, res) => {
    const qID = req.params.id;
    const sqlQuotation = "SELECT * FROM quotation as q , work as w  WHERE q.workID = w.workID AND q.quotationID = ? ";
    console.log(qID);
    db.query(sqlQuotation,[qID], (err, sqlQuotationRe) => {
        if(err) throw err;
        console.log(sqlQuotationRe);
        res.send(sqlQuotationRe);
    })
})


router.delete('/:id', (req, res) => {
    const qID = req.params.id;
    const sqlDelete = "DELETE FROM quotation WHERE quotationID=?";
    db.query(sqlDelete,[qID],(err, sqlQuotation) => {
        if(err) throw err;
    })
})

export default router;