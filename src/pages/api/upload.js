import multer from "multer";
import connectDB from "@/db";
import { RoleData } from "@/models/RoleData";
connectDB();
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
  upload.single("file")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    const { role, message } = req.body;
    const file = req.file ? req.file.filename : null;
    try {
      const roleData = new RoleData({ role, message, file });
      await roleData.save();

      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });
}
