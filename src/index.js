import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDB()


// approch 1
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
//     } catch(error){
//         console.error("ERROR: ", error)
//         throw err
//     }
// }) ()