// import React from "react";
// import "./OnePageProduct.css";
// import { Link } from "react-router-dom";
// import BlueDress from "../../assets/balackother dress.png";
// import WhiteDress from "../../assets/white dress.png";
// import BlackDress from "../../assets/balackother dress.png";
// import BlackRDress from "../../assets/balck dress.png";
// import "swiper/css";

// const Product = () => {
//   const handleSmallImageClick = (index) => {
//     // Handle small image click event
//     console.log("Small image clicked:", index);
//   };

//   return (
//     <div className="d-flex row gap-5 mb-5">
//       <div className="w-75 mx-auto d-flex flex-row go-back-collections align-items-center gap-3">
//         <Link to="/collection">
//           <i
//             className="bi bi-skip-backward go-back-icon"
//             style={{ fontSize: 25 }}
//             title="back to collection"
//           ></i>
//         </Link>
//         <h3 className="m-0">Back to Collections Page</h3>
//       </div>
//       <div className="products-page-container w-75 mx-auto d-flex flex-row justify-content-between gap-5">
//         {/* product images*/}
//         <div className="products-images d-flex flex-row">
//           {/* small images */}
//           <div className="scroll-products-images d-flex flex-column align-items-center justify-content-start">
//             <div className="products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom">
//               <img
//                 src={BlackDress}
//                 alt="Black Dress"
//                 className="card-img-top products-main-image"
//                 onClick={() => handleSmallImageClick(0)}
//               />
//             </div>
//             <div className="products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom">
//               <img
//                 src={WhiteDress}
//                 alt="White Dress"
//                 className="card-img-top products-main-image"
//                 onClick={() => handleSmallImageClick(1)}
//               />
//             </div>
//             <div className="products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom">
//               <img
//                 src={BlueDress}
//                 alt="Blue Dress"
//                 className="card-img-top products-main-image"
//                 onClick={() => handleSmallImageClick(2)}
//               />
//             </div>
//           </div>
//           {/* main image */}
//           <div className="products-main-image-div d-flex align-items-center justify-content-center overflow-hidden">
//             <img
//               src={BlackRDress}
//               alt="Black R Dress"
//               className="card-img-top products-main-image"
//             />
//           </div>
//         </div>
//         {/* products details */}
//         <div className="d-flex flex-row justify-content-start product-details-collection">
//           <div className="d-flex flex-column w-100">
//             <h1 className="product-name mb-1">Product Name</h1>
//             <h5 className="product-category-name mb-3">Category Name</h5>
//             <p>
//               <span className="collection-price">Price: </span> $0.00
//             </p>
//             <p className="card-collection-category">Product Description</p>
//             <div className="d-flex column gap-3 mb-5 align-items-baseline flex-wrap">
//               <p className="collection-price">Colors: </p>
//               {/* Placeholder for color buttons */}
//             </div>
//             <div className="d-flex column gap-3 mb-5 align-items-baseline">
//               <p className="collection-price">Fabric: </p>
//               <p>Fabric Type</p>
//             </div>
//             <div className="cart mt-4 align-items-center">
//               <button className="btn btn-dark text-uppercase mr-2 px-4">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
// // import React, { useState, useEffect } from "react";

// // const Product = ({ productId }) => {
// //   const [product, setProduct] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [selectedColor, setSelectedColor] = useState("");
// //   const [selectedSize, setSelectedSize] = useState("");

// //   useEffect(() => {
// //     fetchProductData(productId)
// //       .then((data) => setProduct(data))
// //       .catch((error) => console.error("Error fetching product data:", error));
// //   }, [productId]);

// //   const fetchProductData = async (productId) => {
// //     // Simulate fetching product data from an API endpoint based on the productId
// //     // Replace this with your actual API endpoint URL
// //     const apiUrl = `https://api.example.com/products/${productId}`;
// //     const response = await fetch(apiUrl);
// //     const data = await response.json();
// //     return data;
// //   };

// //   const handleSmallImageClick = (index) => {
// //     setSelectedImage(index);
// //   };

// //   const handleColorChange = (color) => {
// //     setSelectedColor(color);
// //   };

// //   const handleSizeChange = (size) => {
// //     setSelectedSize(size);
// //   };

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <div className="products-images d-flex flex-row">
// //         <div className="scroll-products-images d-flex flex-column align-items-center justify-content-start">
// //           {product.images.map((image, index) => (
// //             <div
// //               key={index}
// //               className={`products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom ${
// //                 index === selectedImage ? "active" : ""
// //               }`}
// //             >
// //               <img
// //                 src={image}
// //                 alt={`Product Image ${index}`}
// //                 className="card-img-top products-main-image"
// //                 onClick={() => handleSmallImageClick(index)}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //         <div className="products-main-image-div d-flex align-items-center justify-content-center overflow-hidden">
// //           <img
// //             src={product.images[selectedImage]}
// //             alt="Product Main Image"
// //             className="card-img-top products-main-image"
// //           />
// //         </div>
// //       </div>

// //       <div className="d-flex column gap-3 mb-5 align-items-baseline flex-wrap">
// //         <p className="collection-price">Colors:</p>
// //         {product.productCharacteristics.map((characteristic, index) => (
// //           <button
// //             key={index}
// //             className={`color-button ${
// //               characteristic.color === selectedColor ? "active" : ""
// //             }`}
// //             style={{ backgroundColor: characteristic.color }}
// //             onClick={() => handleColorChange(characteristic.color)}
// //           ></button>
// //         ))}
// //       </div>

// //       <div className="d-flex column gap-3 mb-5 align-items-baseline">
// //         <p className="collection-price">Sizes:</p>
// //         {product.productCharacteristics.map((characteristic, index) => (
// //           <button
// //             key={index}
// //             className={`size-button ${
// //               characteristic.size === selectedSize ? "active" : ""
// //             }`}
// //             onClick={() => handleSizeChange(characteristic.size)}
// //           >
// //             {characteristic.size}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Product;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { Link } from "react-router-dom";
// import axios from "axios";
// import "swiper/css";
// import "./OnePageProduct.css"

// const Product = () => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedProductDetails, setSelectedProductDetails] = useState(null);
//   const [selectedQuantity, setSelectedQuantity] = useState(1);
//   const [images, setImages] = useState([]);  // Initialize as an empty array

//   const { productId } = useParams();

//   const handleSmallImageClick = (index) => {
//     // Handle small image click event
//     console.log("Small image clicked:", index);
//     setSelectedImageIndex(index);
//   };

//   const handleQuantityChange = (event) => {
//     // Handle quantity change event
//     setSelectedQuantity(event.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
  
//         // Assuming your backend returns product details in response.data
//         const productDetails = response.data.productCharacteristics[selectedImageIndex];
  
//         // Set the selected product details
//         setSelectedProductDetails(productDetails);
  
//         // Set the images array
//         setImages(response.data.images);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };
  
//     fetchData();
//   }, [selectedImageIndex, productId]);
  
 

//   return (
//     <div className="d-flex row gap-5 mb-5">
//       <div className="w-75 mx-auto d-flex flex-row go-back-collections align-items-center gap-3">
//         <Link to="/collection">
//           <i
//             className="bi bi-skip-backward go-back-icon"
//             style={{ fontSize: 25 }}
//             title="back to collection"
//           ></i>
//         </Link>
//         <h3 className="m-0">Back to Collections Page</h3>
//       </div>
//       <div className="products-page-container w-75 mx-auto d-flex flex-row justify-content-between gap-5">
//         {/* product images*/}
//         <div className="products-images d-flex flex-row">
//           {/* small images */}
//           <div className="scroll-products-images d-flex flex-column align-items-center justify-content-start">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom ${
//                   selectedImageIndex === index ? "selected" : ""
//                 }`}
//                 onClick={() => handleSmallImageClick(index)}
//               >
//                <img
//   src={`http://localhost:4000/${index.image}`} 
//   alt={`Product ${index + 1}`}
//   className="card-img-top products-main-image"
// />
//               </div>
//             ))}
//           </div>
//          {/* main image */}
// <div className="products-main-image-div d-flex align-items-center justify-content-center overflow-hidden">
//   <img
//     src={`http://localhost:4000/${images[selectedImageIndex]}`} // Update path based on your structure
//     alt={`Product ${selectedImageIndex + 1}`}
//     className="card-img-top products-main-image"
//   />
// </div>

//         </div>
//         {/* products details */}
//         <div className="d-flex flex-row justify-content-start product-details-collection">
//           <div className="d-flex flex-column w-100">
//             <h1 className="product-name mb-1">Product Name</h1>
//             <h5 className="product-category-name mb-3">Category Name</h5>
//             <p>
//               <span className="collection-price">Price: </span> ${selectedProductDetails?.price}
//             </p>
//             <p className="card-collection-category">Product Description</p>
//             <div className="d-flex column gap-3 mb-5 align-items-baseline flex-wrap">
//               <p className="collection-price">Colors: {selectedProductDetails?.color}</p>
//               <p className="collection-price">Sizes: {selectedProductDetails?.size}</p>
//               <label className="collection-price">Quantity:</label>
//               <input
//                 type="number"
//                 value={selectedQuantity}
//                 onChange={handleQuantityChange}
//                 min="1"
//                 max={selectedProductDetails?.quantity}
//               />
//             </div>
//             <div className="cart mt-4 align-items-center">
//               <button className="btn btn-dark text-uppercase mr-2 px-4">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "./OnePageProduct.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Newsletter from "../../Components/NewsLetter";
import Announcement from "../../Components/Announcement";


import Reviews from "../../Components/reviews";

const OnePageProduct = ({ match }) => {
  // Change from match?.params?.id to match?.params?.productId
  // const productId = match?.params?.productId;
const  productId= useParams();
// categoryId=useParams();

const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  // const [categories, setCategories] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleSmallImageClick = (index) => {
    setMainImageIndex(index);
  };
  const handleAddToCart = () => {
    addToCart(product);
    // Optionally, you can navigate to the cart page or show a notification.
    navigate("/addToCart");
  };
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/${productId.id}`
        );
        // Assuming productId is nested within products array
        console.log('re ',response) 
        setProduct(response.data.data);
        
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  
    fetchProductById();
  }, [productId]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:4000/api/categories/${categoryId}`);
  //       setCategories(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []); 
   
  
  const getSizesAndColors = () => {
    const sizesSet = new Set();
    const colorsSet = new Set();

    product.productCharacteristics.forEach((char) => {
      sizesSet.add(char.size);
      colorsSet.add(char.color);
    });

    const sizes = Array.from(sizesSet).join(', ');
    const colors = Array.from(colorsSet).join(', ');

    return { sizes, colors };
  };

  // Function to calculate total quantity
  const getTotalQuantity = () => {
    return product.productCharacteristics.reduce((total, char) => total + char.quantity, 0);
  };


  
  return (
    <>
    <Navbar/>
    <Announcement/>
    <div className="d-flex row gap-5 mb-5 one-solpro">
      <div className="w-75 mx-auto d-flex flex-row go-back-collections align-items-center gap-3">
        {/* <Link to="/products/:categoryId">
          <i
            className="bi bi-skip-backward go-back-icon"
            style={{ fontSize: 25 }}
            title="back to collection"
          ></i>
        </Link> */}
        <Link to="/products">
        <h3 className="m-0">Back to Categories  Page</h3>
        </Link>
      </div>
      {product != null ?
      <div className="products-page-container w-75 mx-auto d-flex flex-row justify-content-between gap-5" >
        {/* product images */}
        <div className="products-images d-flex flex-row">
          {/* small images */}
          <div className="scroll-products-images d-flex flex-column align-items-center justify-content-start">
            {product.images &&
              product.images.map((image, index) => (
                <div
                  key={index}
                  className={`products-small-image-container p-1 w-100 d-flex align-items-center justify-content-center border-bottom ${
                    index === mainImageIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={`http://localhost:4000/uploads/${image}`}
                    alt={`Product ${index + 1}`}
                    className="card-img-top products-main-image"
                    onClick={() => handleSmallImageClick(index)}
                  />
                </div>
              ))}
          </div>
          {/* main image */}
          <div className="products-main-image-div d-flex align-items-center justify-content-center overflow-hidden">
            <img
              src={`http://localhost:4000/uploads/${product.images && product.images[mainImageIndex]}`}
              alt={`Product ${mainImageIndex + 1}`}
              className="card-img-top products-main-image"
            />
          </div>
        </div>
        {/* products details */}
        
        <div className="d-flex flex-row justify-content-start product-details-collection"  style={{ marginTop: '20px' }}>
          <div className="d-flex flex-column w-100 ">
            
            <h1 className=" product-name mb-2 collection-price">{product.title}</h1>
            <h5 className="product-category-name mb-3 collection-price">{product.category?.categoryName}</h5>
            <p className="collection-price">
              <span >Price: </span>${product.price}
            </p>
           {/* { product.productCharacteristics.map(( product) => (
            <> */}
            <p  className="try-display-desc">{product.description}</p>
            {/* <div className="d-flex column gap-3 mb-5 align-items-baseline flex-wrap">
              <p className="collection-price">Colors:{getSizesAndColors().colors} </p>
             
            </div>
            <div className="d-flex column gap-3 mb-5 align-items-baseline">
              <p className="collection-price  ">size:  {getSizesAndColors().sizes} </p>
              {/* <p>Total Quantity:{getTotalQuantity()}</p> */}
            {/* </div>
            <p className="mb-2">Total Quantity:{getTotalQuantity()}</p>  */}

<div className="d-flex flex-column mb-3 align-items-baseline">
  <p className="collection-price">Size: {getSizesAndColors().sizes}</p>
  <p className="mb-0">Colors: {getSizesAndColors().colors}</p>
 
</div>

<p className="mb-0  collection-price" >Total Quantity: {getTotalQuantity()}</p>
            {/* </>
            ))} */}
            <div className="cart mt-4 align-items-center">
            {/* <Link
          to={{
            pathname: "/addToCart",
            state: {
              product: {
                id: product.id,
                name: product.name,
                size: getSizesAndColors().sizes,
                color: getSizesAndColors().colors,
                image: product.images && product.images[mainImageIndex],
              },
            },
          }}
        > */}
              <button onClick={handleAddToCart} className="btn btn-dark text-uppercase mr-2 px-4 collection-price"  style={{ marginTop: '35px' }}  >
                Add to cart
                
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      : null
      }
    </div>
    <Reviews/>
    <Newsletter/>
        <Footer/>
    </>
  );
};

export default OnePageProduct;
