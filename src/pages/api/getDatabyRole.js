import dbConnect from '../../db';
import { RoleData } from '../../models/RoleData';

export default async function handler(req, res) {
    try {
      // Connect to the database
      await dbConnect();
        
      const { role } = req.query;

      // Fetch data based on the role query parameter
      const data = await RoleData.find({ role });
      // Send the users as the API response
      res.status(200).json(data);
    } catch (error) {
      // Handle any errors that occurred
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  