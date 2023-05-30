import mongoose from 'mongoose';

const roleDataSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  // Add any other fields related to the user role
});


export const RoleData = mongoose.models.RoleData || mongoose.model('RoleData', roleDataSchema);

