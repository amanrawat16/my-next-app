import mongoose from 'mongoose';

const userRoleSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other fields related to the user role
});


export const UserRole = mongoose.models.UserRole || mongoose.model('UserRole', userRoleSchema);

