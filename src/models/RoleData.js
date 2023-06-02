import mongoose from "mongoose";

const roleDataSchema = new mongoose.Schema({
  role: { type: String, required: true },
  message: { type: String, required: true },
  file: { type: String, required: false },
  // Add any other fields related to the user role
});

export const RoleData =
  mongoose.models.RoleData || mongoose.model("RoleData", roleDataSchema);
