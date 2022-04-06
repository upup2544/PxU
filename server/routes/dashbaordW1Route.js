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
    const sqlRecentSelect = "SELECT workName,endDate FROM work ORDER BY workID DESC LIMIT 1 ";
    const sqlNearestWork = "SELECT workName, endDate, startDate FROM work ORDER BY endDate LIMIT 1";
    const sqlNearestWorkList = "SELECT workName, endDate FROM work ORDER BY endDate LIMIT 4";
    db.query(sqlRecentSelect, (err, recentWork) => {
        if(err) throw err;
        //console.log(recentWork);
        db.query(sqlNearestWork, (err, nearestWork) => {
            if(err) throw err;
            console.log(nearestWork);
            db.query(sqlNearestWorkList, (err, nearestWorkList) => {
                if(err) throw err;
                console.log(nearestWorkList);

            res.send([recentWork, nearestWork, nearestWorkList]);
            })
        })
    })
})
export default router;