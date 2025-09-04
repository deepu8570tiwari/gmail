import mongoose from "mongoose"

const Connection=()=>{
    const DB_URI=`mongodb+srv://itsdeeputiwari_db_user:zsfwm3bhDY1S2SIf@cluster0.opxkrkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        mongoose.connect(DB_URI);
        console.log("Database connected successfully")
    } catch (error) {
       console.log(`Error while connecting with the databases`, error.message) 
    }
}
export default Connection;