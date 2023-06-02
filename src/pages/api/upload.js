import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});
const upload = multer({storage});
// Define the route handler for file upload
const handler = upload.single('file'); // 'file' should match the input field name in your form

export default function (req, res) {
  handler(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err.message);
    }

    // File upload successful
    const filePath = req.file.path; // Path of the uploaded file

    // You can perform additional logic with the uploaded file here

    // Send a response back to the client
    return res.status(200).json({ message: 'File uploaded successfully!', filePath });
  });
}

