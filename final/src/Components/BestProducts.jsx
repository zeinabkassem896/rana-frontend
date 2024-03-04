// import React from 'react';
// import "./BestProducts.css";
// import "./demo.css"

// const BestProductPage = () => {
//   return (
//     <div className="container bg-white">
//       <nav className="navbar navbar-expand-md navbar-light bg-white">
//         <div className="container-fluid p-0">
//           <a className="navbar-brand text-uppercase fw-800" href="#">
//             <span className="border-red pe-2">New</span>Product
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#myNav"
//             aria-controls="myNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="fas fa-bars"></span>
//           </button>
          
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//           <div className="product">
//             <img
//               src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               alt=""
//             />
//             <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
//               <li className="icon">
//                 <span className="fas fa-shopping-bag"></span>
//               </li>
//             </ul>
//           </div>
//           <div className="tag bg-red">sale</div>
//           <div className="title pt-4 pb-1">Winter Sweater</div>
         
//           <div className="price">$ 60.0</div>
//         </div>

//         {/* Repeat the structure for other product items */}
//         <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//           <div className="product">
//             <img
//               src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               alt=""
//             />
//             <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
              
//               <li className="icon">
//                 <span className="fas fa-shopping-bag"></span>
//               </li>
//             </ul>
//           </div>
//           <div className="tag bg-black">out of stock</div>
//           <div className="title pt-4 pb-1">Denim Dresses</div>
//           <div className="price">$ 55.0</div>
//         </div>

//         <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//           <div className="product">
//             <img
//               src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               alt=""
//             />
//             <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
//               <li className="icon">
//                 <span className="fas fa-shopping-bag"></span>
//               </li>
//             </ul>
//           </div>
//           <div className="tag bg-green">new</div>
//           <div className="title pt-4 pb-1"> Empire Waist Dresses</div>
//           <div className="price">$ 70.0</div>
//         </div>

//         <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//           <div className="product">
//             <img
//               src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               alt=""
//             />
//             <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
//               <li className="icon">
//                 <span className="fas fa-shopping-bag"></span>
//               </li>
//             </ul>
//           </div>
//           <div className="title pt-4 pb-1">Pinafore Dresses</div>
//           <div className="price">$ 60.0</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestProductPage;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './BestProducts.css';
// import './demo.css';

// // Install Swiper modules
// import SwiperCore from "swiper";
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



// const BestProductPage = () => {
//   const [bestProducts, setBestProducts] = useState([]);

//   useEffect(() => {
//     const fetchBestProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/products");
//         setBestProducts(response.data.data); 
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBestProducts();
//   }, []);

//   return (
//     <div className="container bg-white">
//       <nav className="navbar navbar-expand-md navbar-light bg-white">
//         <div className="container-fluid p-0">
//           <a className="navbar-brand text-uppercase fw-800" href="#">
//             <span className="border-red pe-2">Best</span>Sellers
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#myNav"
//             aria-controls="myNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="fas fa-bars"></span>
//           </button>
//         </div>
//       </nav>

//       {/* <div className="best-seller-title">Bestseller</div> */}

//       <Swiper
//         slidesPerView={4}
//         navigation
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log('slide change')}
//         className="my-swiper"
//       >
//         {bestProducts.map((product) => (
//           <SwiperSlide key={product._id}>
//             <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
//               <div className="product">
//                 <img src={`http://localhost:4000/${product.images[0]}`} alt=""
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

//                 <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
//                   <li className="icon">
//                     <span className="fas fa-shopping-bag"></span>
//                   </li>
//                 </ul>
//               </div>
//               <div className={`tag ${product.bestSeller ? 'bg-red' : 'bg-black'}`}>{product.bestSeller ? 'sale' : 'out of stock'}</div>
//               <div className="title pt-4 pb-1">{product.title}</div>
//               <div className="price">$ {product.price}</div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BestProductPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./BestProducts.css";
import "./demo.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

const BestProductPage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  const handleAddToCart = (clickedItem) => {
    addToCart(clickedItem);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='just-best-pro'>
    <div className="container bg-white d-flex flex-column product-all ">
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <div className="container-fluid p-0">
          <a className="navbar-brand text-uppercase fw-800 custom-margin-top  title-best" href="#">
            <span className="border-red pe-2 ">New</span>Product
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNav"
            aria-controls="myNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars"></span>
          </button> */}
        </div>
      </nav>
      <div className="row ">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-sm-6 ">
            <div className="product-item">
              <div className="product">
              <Link to={`/product/${product._id}`}> 
                <img src={`http://localhost:4000/uploads/${product.images[0]}`} alt=""/>
                </Link>
                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                  <li className="icon">
                  <Link to={`/addToCart`} onClick={() => handleAddToCart(product)} >
                    <ShoppingBagIcon/>
                    </Link> 
                  </li>
                </ul>
              </div>
              <div className={`tag ${product.bestSeller ? 'bg-red' : 'bg-black'}`}>{product.bestSeller ? 'sale' : 'out of stock'}</div>         
              <div className="title pt-4 pb-1 ">{product.title}</div>
              <div className="price">$ {product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BestProductPage;


