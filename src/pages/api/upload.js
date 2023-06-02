import multer from "multer";
import connectDB from "@/db";
import { RoleData } from "@/models/RoleData";
import cloudinaryV2 from "cloudinary";
import { v2 as cloudinary } from "cloudinary";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: "public/images",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}.${file.originalname.split(".").pop()}`
    );
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          return reject({ status: 400, message: err.message });
        } else if (err) {
          return reject({ status: 500, message: "Internal server error" });
        }

        resolve();
      });
    });

    let { role, message } = req.body;
    let file = req.file;
    let result;
    if (file) {
       result = await cloudinary.uploader.upload(file.path,  { resource_type: "raw" }, 
       function(error, result) {console.log(result, error); });
      // return res.status(400).json({ message: "Missing required parameter - file" });
    }else{
       result={
        secure_url:"null"
      }
    }

    if(!message){
      message = 'null'
    }

    // Upload file to Cloudinary
    // const result = await cloudinary.uploader.upload(file.path);

    // Create a new instance of RoleData with Cloudinary URL
    const roleData = new RoleData({
      role,
      message,
      file: result.secure_url, // Store the Cloudinary image URL
    });

    await roleData.save(); // Save the roleData instance to the database

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ message: error.message || "Internal server error" });
  }
}
