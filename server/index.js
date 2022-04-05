import express from 'express';
import cors from 'cors';
const app = express();
//import routers
import feedRoute from './routes/feedRoute.js'

app.use(cors());

app.use(express.json());

app.use("/feed", feedRoute);


app.listen(8000, () =>{
    console.log("Running on port 8000");
})