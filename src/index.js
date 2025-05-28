import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});
connectDB()
.then(()=>{app.listen(process.env.PORT || 8000,()=>{console.log(`server is running on port ${process.env.PORT}`)})  })
.catch((ERR)=>{console.log(ERR)})









// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(' MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection failed:', err.message);
//     process.exit(1);
//   }
// };

