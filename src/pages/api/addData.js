import dbConnect from '../../db';
import {RoleData} from '../../models/RoleData';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { role, data } = await req.body;
    
      // Create a new user role
      const userData = new RoleData({
        role,
        data,
      });

      // Save the user role to the database
      const savedUserData = await userData.save();
    
      res.status(201).json(savedUserData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the user data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
