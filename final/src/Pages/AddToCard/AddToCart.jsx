import React from "react";
import { useCart } from "../../context/useCart";
import { useParams, useLocation } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Announcement from "../../Components/Announcement";
import Newsltetter from "../../Components/NewsLetter";


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./AddToCart.css";
import {mobile} from "../../responsive";



export default function ProductCards() {
  const {
    cartProducts,
    setCartProducts,
    handleIncrement,
    handleDecrement,
    removeFromCart,
  } = useCart();

  const location = useLocation();
  
  const product = location.state?.product;
  
  

  console.log("cartProductsitems: ", cartProducts);
  const buttonStyle = {
    display: "flex",
    backgroundColor: "#fad0e2e5",
    borderRadius: "10px",
    padding: "0.6% 4%",
    fontSize: "24px",
    textAlign: "center",
    width: "250px",
    height: "40px",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
    borderColor: "#b2b2b4",
    TextDecoder: "none",
  };

  const containerStyle = {
    padding: "20px",
    border: "1px solid #b2b2b4",
    borderRadius: "10px",
    marginTop: "20px", 
    
  };

  const getSizesAndColors = (each_product) => {
    const sizesSet = new Set();
    const colorsSet = new Set();

    each_product.productCharacteristics.forEach((char) => {
      sizesSet.add(char.size);
      colorsSet.add(char.color);
    });

    const sizes = Array.from(sizesSet).join(', ');
    const colors = Array.from(colorsSet).join(', ');

    return { sizes, colors };
  };
  return (
    <div  style={{marginBottom: '-100px',
    marginTop: '-5px' }}>
    <Navbar />
      <Announcement />
      <div className="section-addtocart">
    <section 
      className="add-to-cart-container h-100 w-75 mx-auto border"
      style={{ backgroundColor: "white" }}
    >
      <MDBContainer className="py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4 w-100 mx-0">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>
            {cartProducts?.map((product, index) => (
              
              <MDBCard key={index} className="rounded-3 mb-4 w-100 tr-ty"style={{ height: '260px' }}>
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center "style={{marginTop:'15px'}}>
                    <MDBCol md="2" lg="2" xl="2">
                      {console.log("product ",product)}
                      <MDBCardImage
                        className="rounded-3 add-to-cart-img"
                        fluid
                        src={"http://localhost:4000/uploads/" + product.images[0]}
                        alt={`image_${product.title}`}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">
                        {product.title}
                      </p>
                      <p>
                        <span className="text-muted">Size: </span>
                        {getSizesAndColors(product).sizes}
                        {/* <span className="text-muted">Color: </span>
                        {product.color} {getSizesAndColors(product).colors} */}
                      </p>
                      <p> <span className="text-muted">Color: </span>
                        {product.color} {getSizesAndColors(product).colors}</p>
                    </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content check-products-details"
                      >
                        <MDBCol md="3" lg="3" xl="3" className="offset-lg-1">
                          <MDBTypography
                            tag="h5"
                            className="mb-0  product-price-checkout"style={{width:'40px'}}
                          >
                            {`${product.price}$`}
                          </MDBTypography>
                        </MDBCol>
                        <button
                          onClick={() => {
                            handleDecrement(product);
                          }}
                          className="buttonCartMinus"
                        >
                          <MDBIcon fas icon="minus" />
                        </button>
                        <MDBInput
                          className="cartplusminusinput"
                          min={0}
                          value={product.quantity}
                          type="text"
                          size="sm"
                          // onChange={(e) => {
                          //   const updatedProducts = [...cartProducts]; // Create a copy of the array

                          //   if (updatedProducts.length > 0) {
                          //     updatedProducts[index] = {
                          //       ...updatedProducts[index],
                          //       quantity: +e.target.value,
                          //     };

                          //     setCartProducts(updatedProducts);
                          //   }
                          // }}
                        />
                        <button
                          className="buttonCartPlus"
                          onClick={() => handleIncrement(product)}
                        >
                          <MDBIcon fas icon="plus" />
                        </button>
                      </MDBCol>

                      
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography
                          tag="h5"
                          className="mb-0 product-price-checkout"
                        >
                          {`${product.price * product.quantity}$`}
                        </MDBTypography>
                      </MDBCol>
                    <MDBCol
                      md="1"
                      lg="1"
                      xl="1"
                      className="trashCartPage"
                    >
                      <MDBIcon fas icon="trash text-danger" size="lg" onClick={() => removeFromCart(index)}/>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}
            <div className="d-flex justify-content-between m-2  align-items-center buttons-add">
              <div className="d-flex flex-row align-items-baseline gap-4 justify-content-center">
                <Link to="/products">
                  <button type="button" className="btn btn-dark">
                    Back to shop
                  </button>{" "}
                </Link>

                <Link to="/">
                  <button
                    onClick={() => {
                      setCartProducts([]);
                    }}
                    type="button"
                    className="btn btn-dark"
                  >
                    Empty the cart
                  </button>{" "}
                </Link>
              </div>
              <div className="d-flex flex-row align-items-baseline justify-content-between w-25">
                <p className="text-center px-3">
                  {cartProducts.reduce(
                    (accumulator, product) =>
                      accumulator + product.quantity * product.price,
                    0
                  )}
                </p>

                <Link to="/checkout">
                  <button type="button" className="btn btn-dark add-tocart-butn ">
                    Checkout
                  </button>{" "}
                </Link>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   
    </section>
    </div>
   <Newsltetter/>
    <Footer />
    </div>
  );
}