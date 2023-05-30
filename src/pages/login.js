import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the login data
    const loginData = {
      email,
      password,
    };

    try {
      // Make the API call to perform login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Login successful, redirect to home page
        console.log('Login successful!');
        if(responseData.role == 'admin'){
          router.push('/dashboard');
        }
        else{
          router.push({
            pathname: '/user',
            query: { role: responseData.role },
        }) // Redirect to home page
      } 
    }
      else {
        // Login failed, handle error case
        console.log('Login failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        {/* <p>
          Don`&apos;`t have an account? <Link href="/signup">Signup</Link>
        </p> */}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          background-color: #2196f3;
        }

        .card {
          background-color: #ffffff;
          padding: 60px;
          border-radius: 5px;
          max-width: 600px;
          width:400px;
          text-align: center;
          
        }

        h1 {
          margin-bottom: 20px;
          color:black;
        }

        .form-group {
          margin-bottom: 10px;
          display:flex;
        }
       

        input {
          width: 100%;
          padding: 5px;
          color:black;
          border: 1px solid black;
          border-radius:2px;
        }

        label{
            color:black;
            font-size:16px;
            font-weight:700;
            padding:10px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #2196f3;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        p {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
