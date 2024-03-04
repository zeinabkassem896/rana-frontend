import CollectionsCard from "../../../components/admin-side/collections-card/collectionsCard.jsx";
import { useState, useEffect } from "react";
import CollectionsAddForm from "../../../components/admin-side/collections-form/collectionsAddForm.jsx";
import CollectionsEditForm from "../../../components/admin-side/collections-form/collectionEditForm.jsx";
import axios from "axios";
import "./adminCollectionsPage.css";

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleCollection, setSingleCollection] = useState({});

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get(import.meta.env.VITE_API_ENDPOINT + `api/collections`);
      console.log("hayde el response", response.data.data);
      setCollections(response.data.data);
    };
    fetchCollections();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };

    const handleChangeObject = (obj) => {
      setSingleCollection(obj);
      setOpenEditForm(true);
      console.log("editedObject", obj);
    };

  return (
    <div className="collection-page-container">
      {open && <CollectionsAddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <CollectionsEditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleCollection={singleCollection}
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

      <div className="collection-cards">
        {collections.map((each) => (
          <CollectionsCard
            key={each._id}
            collection={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
