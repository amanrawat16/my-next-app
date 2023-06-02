import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Notification, { toastError, toastSuccess } from './notification';
import { toast } from 'react-toastify';
export default function Dashboard() {
  const [email, setName] = useState('');
  const [role, setRole] = useState('');
  const [data,setData]=useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('addUser');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const router = useRouter();
  let isLogin = router.query.isLogin;

  useEffect(() => {
    // Fetch all users from the API
   if(isLogin){
    toastSuccess("Login as Admin Successfully");
    isLogin=false;
   }
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = () => {
    console.log('Logout');
    router.push('/login');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userRoleData = {
      email,
      role,
      password,
    };

    try {
      const response = await fetch('/api/userRoles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRoleData),
      });

      if (response.ok) {
        console.log('User role inserted successfully!');
        setName('');
        setRole('');
        setPassword('');
        fetchUsers(); // Refresh the user list
      } else {
        console.log('User role insertion failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  
  const handleSubmitData = async(event)=>{
    event.preventDefault();

    const userRoleData = {
      role,
      data,
    };

    try {
      const response = await fetch('/api/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRoleData),
      });

      if (response.ok) {
        toastSuccess("User data inserted successfully")
        setRole('');
        setData(''); // Refresh the user list
      } else {
        toastError('User data insertion failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  
  const handleRoleUpdate = async (event) => {
    event.preventDefault();
  
    // Prepare the role update data
    const roleUpdateData = {
      userId: selectedUser,
      role,
    };
  
    try {
      // Make the API call to update the user role
      const response = await fetch('/api/updateRole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roleUpdateData),
      });
  
      if (response.ok) {
        // Role updated successfully
        console.log('Role updated successfully!');
        // Reset the form fields
        setSelectedUser('');
        setRole('');
      } else {
        // Role update failed, handle error case
        console.log('Role update failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log('Error:', error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <Notification/>
      <div className="sidebar">
        <ul>
          <li
            className={activeTab === 'addUser' ? 'active' : ''}
            onClick={() => handleTabChange('addUser')}
          >
            Add User
          </li>
          <li
            className={activeTab === 'manageRoles' ? 'active' : ''}
            onClick={() => handleTabChange('manageRoles')}
          >
            Manage Roles
          </li>
          <li
            className={activeTab === 'addData' ? 'active' : ''}
            onClick={() => handleTabChange('addData')}
          >
            Add Data
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="content">
        {activeTab === 'addUser' && (
          <div className="card">
            <h1 className="head">Add User</h1>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
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
                <button type="submit">Add User Role</button>
              </form>
            </div>

            <div className="user-table">
              <h2>All Users</h2>
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

{activeTab === 'manageRoles' && (
  <div className="card">
    <h1 className="head">Manage Roles</h1>
    <div className="form-container">
      <form onSubmit={handleRoleUpdate}>
        <div className="form-group">
          <label htmlFor="user">Select User:</label>
          <select id="user" value={selectedUser} onChange={handleUserChange}>
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={handleRoleChange}
          />
        </div>
        <button type="submit" disabled={!selectedUser}>
          Update Role
        </button>
      </form>
    </div>
    <div className="user-table">
              <h2>All Users</h2>
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  </div>
)}
 {activeTab === 'addData' && (
          <div className="card">
            <h1 className="head">Add Data</h1>
            <div className="form-container">
              <form onSubmit={handleSubmitData}>

                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="data">Message:</label>
                  <textarea
                    type="text"
                    id="data"
                    value={data}
                    onChange={handleDataChange}
                    style={{
                      height:"200px",
                      width:"420px",
                      fontSize:"18px"
                    }}
                  />
                  <input type="file" />
                </div>
                  
                <button type="submit">Add User Data</button>
              </form>
            </div>

            
          </div>
        )}
      </div>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
        }
        .head {
          color: black;
          font-size: 30px;
          font-weight: 700;
          text-align: center;
        }
        .sidebar {
          width: 200px;
          background: #2196f3;
          padding: 20px;
          color: white;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .sidebar li {
          padding: 10px;
          cursor: pointer;
        }

        .sidebar li.active {
          background-color: #1565c0;
          color: white;
        }

        .content {
          flex-grow: 1;
          padding: 20px;
          background-color: #f1f1f1;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .form-container {
          max-width: 400px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: black;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 16px;
          color: black;
        }

        button {
          background-color: #2196f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 3px;
          cursor: pointer;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
          text-align: left;
          color:black;
        }

        th {
          background-color: #f2f2f2;
          color:black;
        }

        select{
            color:black;
            border:1px solid;
        }
      `}</style>
    </div>
  );
}
