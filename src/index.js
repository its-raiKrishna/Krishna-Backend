// require('dotenv').config({path: './env'})
import dotenv from "dotenv";


dotenv.config({
    path : './env'
})

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error) {
            console.log('MongoDB connection error',error);
            process.exit(1);
    }
}

export default connectDB



/*
import express from 'express';
const app = express();
//ifies
;( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',()=>{
            console.log('Application not able to connect with Database',error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on the port ${process.env.PORT}`);
        })
    }
    catch(error) {
        console.error("Error found :",error);
        throw error;
    }
})()
    */