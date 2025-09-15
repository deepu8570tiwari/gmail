import express from "express";
import Connection from "./database/db.js";
import routes from "./routes/routes.js";
import cors from "cors";
import nodemailer  from 'nodemailer';
const app=express();
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use('/',routes);
const PORT=8000;
Connection();
app.listen(PORT,()=>console.log(`server is runnning on PORT ${PORT}`))