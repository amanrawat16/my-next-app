import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EditPage() {
  const [formData, setFormData] = useState();
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await fetch(
        `/api/getDataById?_id=${localStorage.getItem("id")}`
      );
      const data = await response.json();

      if (response.ok) {
        setFormData(data);
        console.log(data);
      } else {
        console.log("Failed to fetch form data");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `/api/updateDataById?_id=${localStorage.getItem("id")}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      if (response.ok) {
        console.log("Data updated successfully");
        // Perform any additional actions or navigation after successful update
      } else {
        console.log("Failed to update data");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Edit Data</h1>
        {formData ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData[0].role}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                placeholder={formData[0].message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="big-textarea" // Added class name for styling
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">File:</label>
              <input
                type="text"
                id="file"
                name="file"
                value={formData[0].file}
                disabled
              />
            </div>
            <div className="form-group">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={goBack}>
                Go Back
              </button>
            </div>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          background-color: #3498db;
          padding: 20px;
          border-radius: 8px;
          color: #fff;
          text-align: center;
          width: 400px;
        }

        .form-group {
            font-size:18px;
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: none;
        }

        .form-group textarea.big-textarea {
          font-size: 16px; // Increase the font size for the textarea
        }

        .form-group button {
          margin-top: 10px;
          padding: 8px 16px;
          border-radius: 4px;
          border: none;
          background-color: #fff;
          color: #3498db;
          cursor: pointer;
          margin-right: 10px;
          font-size:18px;
          font-weight:700;
        }
      `}</style>
    </div>
  );
}
