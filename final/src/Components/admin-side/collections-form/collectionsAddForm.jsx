import "./collectionsAddForm.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AddCollectionForm = ({ refresh, setIsOpen }) => {
  const [category, setCategory] = useState({});
  const [collectionCategory, setCollectionCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_ENDPOINT + `api/categories`
      );
      setCollectionCategory(response.data.data);
    };
    fetchCategories();
  }, [refresh]);

  const handleAddCollection = async (e) => {
    e.preventDefault();

    try {
      const fData = new FormData();
      fData.append("image", image);
      fData.append("name", name);
      fData.append("categoryId", category._id);

      const response = await axios.post(
        import.meta.env.VITE_API_ENDPOINT + "api/collections",
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
          alert("Collection name already exists!");
        }
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="form-container-collection">
      <form onSubmit={handleAddCollection} className="form-submit-collection">
        <div className="inputs-container">
          <div className="input-label-container-collection">
            <div className="input-label-container-collection">
              <label className="label-collection">
                Collection Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            </div>
            <label className="label-product" htmlFor="ProductName">
              Category:
            </label>
            <select
              value={category._id || ""}
              onChange={(e) => {
                setCategory({ _id: e.target.value });
              }}
              required
              className="option-category"
            >
              <option value="">Select a category</option>
              {collectionCategory.map((item, index) => (
                <option value={item._id} key={index}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="input-label-container-collection">
              <label className="label-collection">
                Product Name
                <input
                  type="text"
                  value={data.productName || ""}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
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
                  setImage(e.target.files[0]);
                }}
              />
              <div className="custom-file-input">Choose File</div>
              <div className="selected-file-name">
                {image ? image.name : "No file chosen"}
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
          <div className="add-collection-1">
            <button className="add-button-collection" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCollectionForm;
