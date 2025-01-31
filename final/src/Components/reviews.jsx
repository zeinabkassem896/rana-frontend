import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./reviews.css"
import AddReview from "./addreview"
function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/reviews'); 
        setReviews(response.data.data);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div  className='eviews-min-page' style={{marginBottom:'50px',padding:'150px'}}>
      <div className="Reviews-title-line"></div>
      <h4 className="Reviews-title">Reviews</h4>
      <div className="Reviews">
        {reviews.map((review) => (
          <div key={review._id} className="review">
            <p>{review.userId.username}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <AddReview/>
    </div>
  );
}

export default Reviews;
