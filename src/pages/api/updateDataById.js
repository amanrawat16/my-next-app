import dbConnect from "../../db";
import { RoleData } from "../../models/RoleData";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
  
  // Extract the _id and message from the request body
  const { _id, message } = await req.body[0];

  try {
    // Connect to the database
    await dbConnect();
    // Update the document by _id
    const result = await RoleData.findByIdAndUpdate(_id, { message });

    if (result) {
      res.status(200).json({ message: "Message updated successfully" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
