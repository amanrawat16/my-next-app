import { useEffect, useState } from "react";
import Notification, { toastSuccess } from "./notification";
import { useRouter } from "next/router";

export default function UserDashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/getDatabyRole?role=${localStorage.getItem("role")}`
      );
      const data = await response.json();

      if (response.ok) {
        setData(data);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/login");
    // Add any other necessary logout logic here
  };

  return (
    <>
      <div className="container">
        <Notification />
        <div className="sidebar">
          <ul>
            <li className="active">All Data</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
        <div className="user-table">
          <h1>All Data</h1>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th className="role">Role</th>
                  <th className="data">Message</th>
                  <th className="file">File</th>
                  <th className="edit">Edit</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user) => (
                  <tr key={user?._id}>
                    <td>{user?.role}</td>
                    <td className="data">{user?.message}</td>
                    <td className="file">
                      <a href={user?.file}>
                        {user.file !== "null" ? "Download File" : "No file"}
                      </a>
                    </td>
                    <td className="edit">
                      <a
                        href={`/edit`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "700",
                        }}
                        onClick={() => {
                          localStorage.setItem("id", user?._id);
                        }}
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          text-align: center;
          height:100vh;
        }
        .sidebar {
          font-size:28px;
          font-weight:700;
          width: 200px;
          background: blue;
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
          background-color: darkblue;
          color: white;
        }
        .user-table {
          
          flex-grow: 1;
          padding-left: 20px;
          text-align: left;
        }
        .table-responsive {
          overflow-x: auto;
        }
        table {
          width: 100%;
          margin-top:10px;
        }
        .role {
          width: 80px;
        }
        th
          {
            font-size:20px;
            padding: 8px;
            background: lightgray;
            border: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            border-right:1px solid #ddd;
            border-top:1px solid #ddd;
          }
        
        td {
          padding: 8px;
          border-left: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          border-right:1px solid #ddd;
        }
        .data {
          width: 200px;
        }
    
        .file {
          width: 150px;
        }
    
        .edit {
          width: 80px;
        }
    
        a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </>
    );
  }
