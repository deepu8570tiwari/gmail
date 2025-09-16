import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();
const Connection=()=>{
    const DB_URI=`mongodb+srv://${process.env.NODE_DB_USERNAME}:${process.env.NODE_DB_PASSWORD}@cluster0.opxkrkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        mongoose.connect(DB_URI);
        console.log("Database connected successfully")
    } catch (error) {
       console.log(`Error while connecting with the databases`, error.message) 
    }
}
export default Connection;