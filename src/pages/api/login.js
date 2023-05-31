import { UserRole } from '@/models/UserRole';
import connectDB from '../../db';
import {User} from '../../models/User';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await UserRole.findOne({ email });

      if (!user) {
        try{
          const user2 = await User.findOne({ email });

          if(!user2){
            res.status(401).json({ message: 'User not found' });
          }

          if (password === user2.password) {
            // Successful login
            res.status(200).json({ message: 'Login successful',role:"admin" });
          } else {
            // Invalid credentials
            res.status(401).json({ message: 'Invalid email or password' });
          }
        }
        catch{
          console.error('Error:', error.message);
          res.status(500).json({ message: 'Internal Server Error' });
        }

      }

      // Perform password comparison here
      if (password === user.password) {
        // Successful login
        res.status(200).json({ message: 'Login successful',role:user2.role });
      } else {
        // Invalid credentials
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
