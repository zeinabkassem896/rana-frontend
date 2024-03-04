import { useState, useEffect } from "react";
import axios from "axios";
import "./categoriesEditForm.css";

const EditCategoryForm = ({ refresh, setIsOpen, singleCategory }) => {
  const [data, setData] = useState(singleCategory);

  useEffect(() => {
    setData(singleCategory);
  }, [singleCategory]);

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("categoryName", data.categoryName);

      const response = await axios.put(
        `http://localhost:4000/api/categories/${data._id}`,
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container-edit-category">
      <form onSubmit={handleEditCategory} className="form-edit-category">
        <div className="inputs-container-edit">
          <div className="input-label-container-category">
            <div className="input-label-container-category-edit">
              <label className="label-category-edit">
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
            <label className="label-category-edit">
              Category Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
              <div className="input-label-container-category-edit">
                <img
                  src={`http://localhost:4000/uploads/${data.image}`}
                  width={"700px"}
                  height={"300px"}
                  alt={data._id}
                />
              </div>
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
          <div className="edit-category-1">
            <button className="edit-button-category" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;
