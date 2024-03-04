import { useState, useEffect } from "react";
import axios from "axios";
import "./adminsEditForm.css";

const EditAdminsForm = ({ refresh, setIsOpen, singleAdmins }) => {
  const [data, setData] = useState(singleAdmins);
  const [editedPassword, setEditedPassword] = useState(singleAdmins.password);

  useEffect(() => {
    setData(singleAdmins);
    setEditedPassword(singleAdmins.password);
  }, [singleAdmins]);

  const handleEditAdmins = async (e) => {
    e.preventDefault();
    try {
      const { password, ...updatedUserWithoutPassword } = data;
      const updatedUserData = { ...updatedUserWithoutPassword };

      if (password != editedPassword) {
        updatedUserData.password = password;
      }

      const response = await axios.put(
        
          `http://localhost:4000/api/admins/${updatedUserWithoutPassword._id}`,
        updatedUserData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-edit-admins">
      <form onSubmit={handleEditAdmins} className="form-edit-admins">
        <div className="inputs-container-edit">
          <div className="input-label-container-admins">
            <div className="input-label-container-admins-edit">
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
            <div className="input-label-container-admins-edit">
              <label className="label-admins">
                Password
                <input
                  type="password"
                  value={data.password || ""}
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </label>
            </div>
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
          <div className="edit-admins-1">
            <button className="edit-button-admins" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditAdminsForm;
