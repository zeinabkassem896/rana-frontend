import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Announcement from '../../Components/Announcement';
import Newsletter from "../../Components/NewsLetter";
import axios from 'axios'; 
import "./ReadBlogById.css";

function ReadBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/blogs/${id}`);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    // <div className='blog-by-id-container d-flex row align-items-center w-100 mx-auto'>
    //   <div className='d-flex row align-items-center justify-content-center blog-by-id-container-image'>
    //     {blog.image && (
    //       <img src={`http://localhost:4000/${blog.image}`}  alt="readblogimg" width="20%" height="30%" className='readblog-img1'/>
    //     )}
    //     {blog.date && (
    //       <h6 className='readblog-date'>{new Date(blog.date).toISOString().split('T')[0]}</h6>
    //     )}
    //     <h2 className='readblog-title'>{blog.title}</h2>
    //     <p className='readblog-description'>{blog.text}</p>
    //   </div>
    // </div>
    <>

<Navbar/>  
<Announcement/>
<div className='read-blog-by-id'>
<div className="card mb-3  s-card-blogby-id" style={{ marginTop: '69px', margin: '90px auto', backgroundColor: '#fcf5f5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}>
  <div className="row no-gutters" >
    <div className="col-md-4  ">
      {blog.image && (
        <img src={`http://localhost:4000/${blog.image}`} alt="readblogimg" className="card-img" />

      )}
    </div>
    <div className="col-md-8">
      <div className="card-body" style={{ marginTop: '65px'}}>
        <h5 className="card-title " style={{fontSize:'35px',marginBottom:'50px'}}>{blog.title}</h5>
        <p className="card-text "  style={{ marginTop: '40px',fontSize:'18px' ,marginRight:'240px',textAlign:'justify',fontSize:'15px',}}>{blog.text}</p>
        {blog.date && (
          <h6 className="card-text " style={{ marginTop: '100px', marginRight:'780px',fontSize:'18px' }}>{new Date(blog.date).toISOString().split('T')[0]}</h6>
        )}
      </div>
    </div>
  </div>
</div>
</div>
<Newsletter/>
<Footer/>
</>
  );
}

export default ReadBlog;