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

router.post('/', (req, res) => {
    const workName = req.body.workName
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const customerID = req.body.customerID
    const producterID = req.body.producterID
    const workStatus = req.body.workStatus
    const workNote = req.body.workNote

    const sqlInsert = "INSERT INTO work (workName,startDate,endDate,customerID,producterID,workStatus,workNote) VALUES (?,?,?,?,?,?,?);"
    db.query(sqlInsert, [workName,startDate,endDate,customerID,producterID,workStatus,workNote], (err,result)=>{
        console.log(result);
        res.send(result);
    }) 
});


export default router;