import { v2 as cloudinary } from "cloudinary";
import fs from fs
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadOnCloudinary = async (path) => {
    try {
        if(!path) return null;
        const result = await cloudinary.uploader.upload(path,{resource_type:"auto"});
        console.log("File uploaded:", result);
        return result;
    } catch (error) {
        fs.unlinkSync(path); //remove locally saved unlinked file
        return null;
    }
};

export {uploadOnCloudinary}