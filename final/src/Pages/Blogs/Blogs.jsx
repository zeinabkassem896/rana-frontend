import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Announcement from '../../Components/Announcement';
import Newsletter from "../../Components/NewsLetter";

import "./Blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogs");
        setBlogs(response.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
        // Display more information about the error
        if (error.response) {
          console.error("Server responded with:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      }
    };
    fetchData();
  }, []);
  

  return (
    <>
<Navbar/> 
<Announcement/> 
    <div className='blog'>
      <h2 className='blog-f-title'>BLOGS</h2>
      <div className="blog-container-wrapper"> 
        {blogs?.length === 0 ? (
          <h1>no blogs yet</h1>
        ) : (
          blogs?.map(blog => (
            <div className='blog-container' key={blog._id}>
              <h3 className='title-blog'>{blog.title}</h3>
              <h6 className='blog-date'>{new Date(blog.date).toISOString().split('T')[0]}</h6>
              <div className='img-p-blogs'>
                <p className='blog-description'>{blog.text.substring(0, 150)}...</p>
                <div className='blog-img-container'>
                <img src={`http://localhost:4000/${blog.image}`} alt="blog-img" className='blog-img'/>
                

                </div>
                <Link to={`/readblog/${blog._id}`} className='blog-link'>
                  Read More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    <Newsletter/>
    <Footer/>
</>
  );
}

export default Blogs;