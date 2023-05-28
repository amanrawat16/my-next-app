import connectDB from '../../db';
import {User} from '../../models/User';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.find({email});
      if (existingUser.length > 0) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }

      // Create a new user
      const newUser = new User({
        email,
        password,
      });

      // Save the new user to the database
      await newUser.save();

      res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
