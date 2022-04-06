import express from 'express';
import cors from 'cors';
const app = express();
//import routers
import companyRoute from './routes/companyRoute.js'
import createcompanyRoute from './routes/createcompanyRoute.js'
import dashboardW1Route from './routes/dashbaordW1Route.js'

app.use(cors());

app.use(express.json());

app.use("/company", companyRoute);
app.use("/createcompany", createcompanyRoute);
app.use("/", dashboardW1Route);

app.listen(8000, () =>{
    console.log("Running on port 8000");
})