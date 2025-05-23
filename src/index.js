import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});
connectDB();









// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(' MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection failed:', err.message);
//     process.exit(1);
//   }
// };

