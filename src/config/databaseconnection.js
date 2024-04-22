// imported file
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;
// database connection
export const connectdb = ()=>{
    try{
    mongoose.connect(url).then(()=>{
        console.log("db is connected")
    })
}catch(err){
    console.log(err);
}
}