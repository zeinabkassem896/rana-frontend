import ProductsCard from "../../../Components/admin-side/products-card/productsCard.jsx";
import { useState, useEffect } from "react";
import ProductsAddForm from "../../../Components/admin-side/products-form/productsAddForm.jsx";
import ProductsEditForm from "../../../Components/admin-side/products-form/productsEditForm.jsx";
import axios from "axios";
import "./adminProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:4000/api/products");
      console.log("hayde el response", response.data.data);
      setProducts(response.data.data);
    };
    fetchProducts();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

    const handleChangeObject = (obj) => {
      setSingleProduct(obj);
      setOpenEditForm(true);
      console.log("editedObject", obj);
    };

  return (
    <div className="product-page-container">
      {open && <ProductsAddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <ProductsEditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleProduct={singleProduct}
        />
      )}
      <div className="add-button-icon">
        <button type="button" className="add-button" onClick={() => setOpen(true)}>
          <span className="button__text">Add Item</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </button>
      </div>

      <div className="product-cards">
        {products.map((each) => (
          <ProductsCard
            key={each._id}
            product={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
