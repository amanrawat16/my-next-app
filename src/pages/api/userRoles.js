import dbConnect from '../../db';
import {UserRole} from '../../models/UserRole';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { email, role, password } = await req.body;
    
      // Create a new user role
      const userRole = new UserRole({
        email,
        role,
        password,
      });
      console.log(userRole);
      // Save the user role to the database
      const savedUserRole = await userRole.save();
    
      res.status(201).json(savedUserRole);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the user role' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
