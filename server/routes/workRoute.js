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

    const sqlSelect = "SELECT * FROM work"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
    
});

router.get('/:id', (req, res)=> {
    const workID=req.params.id;
    const sqlscopeSelect = "SELECT * FROM work as w,scope as s WHERE w.workID=s.workID AND w.workID=?";
    const sqlcustomer= "SELECT * FROM work as w,company as c WHERE w.customerID=c.companyID AND w.workID=?";
    const sqlproducter= "SELECT * FROM work as w,company as c WHERE w.producterID=c.companyID AND w.workID=?";
    db.query(sqlscopeSelect,[workID],(err, allScope) => {
        db.query(sqlcustomer, [workID],(err, customer) => {
            db.query(sqlproducter,[workID], (err, producter) => {
                res.send([allScope, producter, customer]);
            })
        })

    })
    
});


router.post('/', (req, res) => {
    const workID = req.body.workID
    const workName = req.body.workName
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const customerID = req.body.customerID
    const producterID = req.body.producterID
    const workStatus = req.body.workStatus
    const workNote = req.body.workNote

    const sqlInsert = "INSERT INTO work (workID,workName,startDate,endDate,customerID,producterID,workStatus,workNote) VALUES (?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [workID,workName,startDate,endDate,customerID,producterID,workStatus,workNote], (err,result)=>{
        // console.log(result);
        res.send(result);
    }) 
});


export default router;