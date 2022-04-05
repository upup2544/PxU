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
        res.send(result);
    })
    
});

export default router;
