import { useState, useEffect } from "react";
import axios from "axios";
import "./collectionEditForm.css";

const EditCollectionForm = ({ refresh, setIsOpen, singleCollection }) => {
  const [data, setData] = useState(singleCollection);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + `api/categories`
      );
      setCategories(response.data.data);
    };
    fetchCategories();
  }, [refresh]);

  useEffect(() => {
    setData(singleCollection);
  }, [singleCollection]);

  const handleEditCollection = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("name", data.name);
      fData.append("categoryId", data.categoryId._id);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `api/collections/${data._id}`,
        fData
      );
      console.log(response);
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log("Edit collection failed:", error);
    }
  };

  return (
    <div className="form-container-edit-collection">
      <form onSubmit={handleEditCollection} className="form-edit-collection">
        <div className="inputs-container">
          <div className="input-label-container-collection">
            <label className="label-collection">
              Collection Name
              <input
                type="text"
                value={data.name || ""}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </label>
          </div>
          <label className="label-product" htmlFor="ProductName">
            Category:
          </label>
          <select
            value={data.categoryId._id || ""}
            onChange={(e) => {
              setData({
                ...data,
                categoryId: {
                  ...data.categoryId,
                  _id: e.target.value,
                },
              });
            }}
            required
            className="option-category"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          {/* <div className="input-label-container-collection">
            <label className="label-collection">
              Category Name
              <input
                type="text"
                value={data.categoryId.categoryName || ""}
                onChange={(e) => {
                  setData({
                    ...data,
                    categoryId: {
                      ...data.categoryId,
                      categoryName: e.target.value,
                    },
                  });
                }}
              />
            </label>
          </div> */}
          <div className="input-label-container-collection">
            <label className="label-collection">
              Collection Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
              <img
                src={import.meta.env.VITE_API_ENDPOINT + data.image}
                width={"700px"}
                height={"300px"}
                alt={data._id}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {data.image ? data.image.name : "No file chosen"}
              </div>
            </label>
          </div>
        </div>
        <div className="collection-buttons-container">
          <div className="cancel-collection-1">
            <button
              className="cancel-button-collection"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
          <div className="edit-collection-1">
            <button className="edit-button-collection" type="submit">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCollectionForm;
