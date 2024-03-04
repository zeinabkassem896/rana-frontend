import { useState, useEffect } from "react";
import axios from "axios";
import "./productsEditForm.css";

const EditCollectionForm = ({ refresh, setIsOpen, singleProduct }) => {
  const [data, setData] = useState(singleProduct);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get( "http://localhost:4000/api/collections"
      );
      setCollections(response.data.data);
    };
    fetchCollections();
  }, [refresh]);

  useEffect(() => {
    setData(singleProduct);
  }, [singleProduct]);

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const fData = new FormData();
      fData.append("image", data.image);
      fData.append("price", data.price);
      fData.append("color", data.color);
      fData.append("fabric", data.fabric);
      fData.append("quantity", data.quantity);
      fData.append("bestSeller", data.bestSeller);
      fData.append("description", data.description);
      fData.append("collectionId", data.collectionId._id);

      const response = await axios.put(
        import.meta.env.VITE_API_ENDPOINT + `http://localhost:4000/api/products/${data._id}`,
        fData
      );
      console.log(response); 
      refresh("a");
      setIsOpen(false);
    } catch (error) {
      console.log("Edit product failed:", error);
    }
  }; 
 
 
  return (
    <div className="form-container-edit-product">
      <form onSubmit={handleEditProduct} className="form-edit-product">
      <div className="inputs-container">
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Price
              <input
                type="text"
                value={data.price || ""}
                onChange={(e) => {
                  setData({ ...data, price: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Color
              <input
                type="text"
                value={data.color || ""}
                onChange={(e) => {
                  setData({ ...data, color: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Fabric
              <input
                type="text"
                value={data.fabric || ""}
                onChange={(e) => {
                  setData({ ...data, fabric: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Quantity
              <input
                type="text"
                value={data.quantity || ""}
                onChange={(e) => {
                  setData({ ...data, quantity: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              BestSeller
              <input
                type="text"
                value={data.bestSeller || ""}
                onChange={(e) => {
                  setData({ ...data, bestSeller: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="input-label-container-product-edit">
            <label className="label-product-edit" htmlFor="ProductName">
              Collection:
            </label>
            <select
              value={data.collectionId._id || ""}
              onChange={(e) => {
                setData({
                  ...data,
                  collectionId: {
                    ...data.collectionId,
                    _id: e.target.value,
                  },
                });
              }}
              required
              className="option-category"
            >
              <option value="">Select a collection</option>
              {collections.map((collection) => (
                <option value={collection._id} key={collection._id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Image
              <input
                type="file"
                onChange={(e) => {
                  setData({ ...data, image: e.target.files[0] });
                }}
              />
              <img
                src={`http://localhost:4000/${data.image}`}
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

          <div className="input-label-container-product-edit">
            <label className="label-product-edit">
              Product Description
              <textarea
                rows={5}
                cols={65}
                value={data.description || ""}
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
              />
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
