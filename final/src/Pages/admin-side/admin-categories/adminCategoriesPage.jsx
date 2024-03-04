import  CategoriesCard from "../../../Components/admin-side/categories-card/categoriesCard.jsx"
import { useState, useEffect } from "react";
import CategoriesAddForm from "../../../Components/admin-side/categories-form/categoriesAddForm.jsx"
 import CategoriesEditForm from "../../../Components/admin-side/categories-form/categoriesEditForm.jsx";
import axios from "axios";
import "./adminCategoriesPage.css";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleCategory, setSingleCategory] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get( "http://localhost:4000/api/categories");
      console.log("hayde el response", response.data.data);
      setCategories(response.data.data);
    };
    fetchCategories();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

    const handleChangeObject = (obj) => {
      setSingleCategory(obj);
      setOpenEditForm(true);
      console.log("editedObject", obj);
    };

  return (
    <div className="category-page-container">
      {open && <CategoriesAddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <CategoriesEditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleCategory={singleCategory}
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

      <div className="category-cards">
        {categories.map((each) => (
          <CategoriesCard
            key={each._id}
            category={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
