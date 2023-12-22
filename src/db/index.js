import mongoose from "mongoose";
import { db_name } from "../constants.js";

const dbConnect= async ()=>{
    try {
      const res=await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
      console.log("Connected to MongoDB: ",res.connection.host)
    } catch (error) {
      console.error(error);
      process.exit(1)  
    }
}

export default dbConnect;