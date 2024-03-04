import "./categoriesAddForm.css";
import { useState } from "react";
import axios from "axios";

const AddCategoryForm = ({ refresh, setIsOpen }) => {
  const [data, setData] = useState({
    image: null,
    categoryName: " ",
  });

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("categoryName", data.categoryName);
      // CHECK CATEGORY NAME

      const response = await axios.post(
        "http://localhost:4000/api/categories",
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else if (error.response.status === 500) {
          alert("Category name already exists!");
        }
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="form-container-category">
      <form onSubmit={handleAddCategory} className="form-submit-category">
        <div className="inputs-container">
          <div className="input-label-container-category">
            <label className="label-category">
              Category Name
              <input
                type="text"
                value={data.categoryName || ""}
                onChange={(e) => {
                  setData({ ...data, categoryName: e.target.value });
                }}
              />
            </label>
          </div>

          <div className="input-label-container-category">
            <label className="label-category">
              Category Image
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
        </div>
        <div className="category-buttons-container">
          <div className="cancel-category-1">
            <button
              className="cancel-button-category"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="add-category-1">
            <button className="add-button-category" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
