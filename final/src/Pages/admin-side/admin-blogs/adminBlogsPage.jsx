import BlogsCard from "../../../Components/admin-side/blogs-card/blogsCard.jsx";
import { useState, useEffect } from "react";
import BlogsAddForm from "../../../Components/admin-side/blogs-form/blogsAddForm.jsx";
import BlogsEditForm from "../../../Components/admin-side/blogs-form/blogsEditForm.jsx";
import axios from "axios";
import "./adminBlogsPage.css";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [refreshPage, setRefreshPage] = useState("");
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:4000/api/blogs");
      console.log("hayde el response", response.data.data);
      setBlogs(response.data.data);
    };
    fetchBlogs();
  }, [refreshPage]);

  const refPage = (refresh) => {
    setRefreshPage(refreshPage + refresh);
  };
  const handleChangeObject = (obj) => {
    setSingleBlog(obj);
    setOpenEditForm(true);
    console.log("editedObject", obj);
  };
  
  return (
    <div className="blogs-page-container">
      {open && <BlogsAddForm refresh={refPage} setIsOpen={setOpen} />}
      {openEditForm && (
        <BlogsEditForm
          setIsOpen={setOpenEditForm}
          refresh={refPage}
          singleBlog={singleBlog}
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

      <div className="blogs-cards">
        {blogs.map((each) => (
          <BlogsCard
            key={each._id}
            blog={each}
            handleChangeObject={handleChangeObject}
            refresh={refPage}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
