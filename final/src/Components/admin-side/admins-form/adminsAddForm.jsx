import "./adminsAddForm.css";
import { useState } from "react";
import axios from "axios";

const AdminsAddForm = ({ refresh, setIsOpen }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleAddAdmins = async (e) => {
    e.preventDefault();

    try {
 

      const response = await axios.post(
         "http://localhost:4000/api/register",
        data
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      // Check if the response status is 400
      if (error.response && error.response.status === 404) {
        // Display the error message to the user
        alert(error.response.data.message);
        
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="form-container-admins">
      <form onSubmit={handleAddAdmins} className="form-submit-admins">
        <div className="inputs-container-admins">
          <div className="input-label-container-admins">
            <label className="label-admins">
              Username
              <input
                type="text"
                value={data.username || ""}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
              />
            </label> 
          </div>

          <div className="input-label-container-admins">
            <label className="label-admins">
              Password
              <input
                type="current-password"
                value={data.password || ""}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <div className="admins-buttons-container">
          <div className="cancel-admins-1">
            <button
              className="cancel-button-admins"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-admins-1">
            <button className="add-button-admins" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminsAddForm;
