import express from 'express';
import cors from 'cors';
const app = express();
//import routers
import companyRoute from './routes/companyRoute.js'
import workRoute from './routes/workRoute.js'
import lastworkRoute from './routes/lastworkRoute.js'
import detailRoute from './routes/scopeRoute.js'

app.use(cors());

app.use(express.json());

app.use("/company", companyRoute);
app.use("/works", workRoute);
app.use("/detail", detailRoute);
app.use("/lastwork", lastworkRoute);

app.listen(8000, () =>{
    console.log("Running on port 8000");
})