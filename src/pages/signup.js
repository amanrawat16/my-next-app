import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    // Prepare the signup data
    const signupData = {
      email,
      password,
    };

    try {
      // Make the API call to perform signup
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        // Signup successful
        const data = await response.json();
        console.log(data.message);
      } else {
        // Signup failed
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          style={{
            color:"black"
          }}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
           style={{
            color:"black"
          }}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
