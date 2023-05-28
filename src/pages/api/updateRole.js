import dbConnect from '../../db';
import { UserRole } from '../../models/UserRole';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the database
      await dbConnect();

      // Extract the user ID and new role from the request body
      const { userId, role } = req.body;

      // Find the user by ID and update the role
      const user = await UserRole.findByIdAndUpdate(userId, { role });

      if (!user) {
        // User not found
        return res.status(404).json({ error: 'User not found' });
      }

      // Role updated successfully
      res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
      // Handle any errors that occurred
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
