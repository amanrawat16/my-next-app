import dbConnect from '../../db';
import { UserRole } from '../../models/UserRole';

export default async function handler(req, res) {
    try {
      // Connect to the database
      await dbConnect();
  
      // Fetch all users from the UserRole model
      const users = await UserRole.find();
  
      // Send the users as the API response
      res.status(200).json(users);
    } catch (error) {
      // Handle any errors that occurred
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  