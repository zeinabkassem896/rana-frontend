import StoriesCard from "../../../components/admin-side/stories-card/storiesCard.jsx";
import { useState, useEffect } from "react";
import StoriesAddForm from "../../../components/admin-side/stories-form/storiesAddForm.jsx";
import StoriesEditForm from "../../../components/admin-side/stories-form/storiesEditForm.jsx";
import axios from "axios";
import "./adminStoriesPage.css";

const StoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleStory, setSingleStory] = useState({});

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get(import.meta.env.VITE_API_ENDPOINT + `api/stories`);
      console.log("hayde el response", response.data.data);
      setStories(response.data.data);
    };
    fetchStories();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

    const handleChangeObject = (obj) => {
      setSingleStory(obj);
      setOpenEditForm(true);
      console.log("editedObject", obj);
    };

  return (
    <div className="product-page-container">
      {open && <StoriesAddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <StoriesEditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleStory={singleStory}
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
        {stories.map((each) => (
          <StoriesCard
            key={each._id}
            story={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
