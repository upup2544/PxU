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

    const sqlSelect = "SELECT * FROM scope"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
    
});

router.post('/', (req, res) => {
    const workID = req.body.workID
    const text = req.body.text
    const price = req.body.price

    const sqlInsert = "INSERT INTO scope (workID,text,price) VALUES (?,?,?);"
    db.query(sqlInsert, [workID,text,price], (err,result)=>{
        console.log(result);
        res.send(result);
    }) 
});


export default router;