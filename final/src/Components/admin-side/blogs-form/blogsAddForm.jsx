import "./blogsAddForm.css";
import { useState } from "react";
import axios from "axios";

const AddForm = ({ refresh, setIsOpen }) => {
  const [data, setData] = useState({
    image: null,
    title: " ",
    text: " ",
    date: null,
  });

  const handleAddBlog = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("title", data.title);
      fData.append("text", data.text);
      fData.append("date", data.date);

      const response = await axios.post(
         "http://localhost:4000/api/blogs",
        fData
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
    <div className="form-container-blog">
      <form onSubmit={handleAddBlog} className="form-submit-blog">
        <div className="inputs-container">
          <div className="input-label-container-blog">
            <label className="label-blog">
              Blog Title
              <input
                type="text"
                value={data.title || ""}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-blog">
            <label className="label-blog">
              Blog Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.image ? data.image.name : "No file chosen"}
              </div>
            </label>
          </div>

          <div className="input-label-container-blog">
            <label className="label-blog">
              Date
              <input
                type="date"
                value={data.date || ""}
                onChange={(e) => {
                  setData({ ...data, date: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-blog">
            <label className="label-blog">
              Text
              <textarea
                rows={5}
                cols={65}
                value={data.text || ""}
                onChange={(e) => {
                  setData({ ...data, text: e.target.value });
                }}
              />
            </label>
          </div>
        </div>
        <div className="blog-buttons-container">
          <div className="cancel-blog-1">
            <button
              className="cancel-button-blog"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-blog-1">
            <button className="add-button-blog" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
