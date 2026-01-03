import mongoose from 'mongoose';


export const connectDB = async()=>{
    try{
        const MONGO_URI=process.env.MONGO_URI;
        if(!MONGO_URI) throw new Error("MONGO_URI is not set");
        const conn=await mongoose.connect(MONGO_URI);
        console.log("MONGODB connected", conn.connection.host);
    }
    catch(error){
       console.log("Error in DB connection", error);
       process.exit(1);
    }
    
}
