import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/useCart";
import { Link ,useNavigate} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import"./Checkout.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Announcement from "../../Components/Announcement";
import Newsletter from "../../Components/NewsLetter";


// const buttonStyle = {
//   display: "flex",
//   backgroundColor: "#fad0e2e5",
//   borderRadius: "10px",
//   padding: "0.6% 4%",
//   fontSize: "24px",
//   textAlign: "center",
//   width: "250px",
//   height: "40px",
//   textAlign: "center",
//   justifyContent: "center",
//   fontFamily: "Poppins",
//   borderColor: "#b2b2b4",
//   TextDecoder: "none",
// };

function Checkout() {
  const navigate = useNavigate();
  const { cartProducts, setCartProducts, addToCart, removeFromCart } =
    useCart();

  const products = cartProducts?.map((product) => ({
    productId: product._id,
    quantity: product.quantity,
    price: product.price,
    size:'large',
    color: 'red'
  }));

  const totalAmount = products.reduce(
    (accumulator, product) => accumulator + product.quantity * product.price,
    0
  );

  const [deliveryAddress, setDeliveryAddress] = useState({
    receiverName: "",
    city: "",
    street: "",
    building: "",
    phone: "",
    addressDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleCreateOrder = async (e) => {
    e.preventDefault();
    // console.log("checkout", deliveryAddress);
    try {
      // Fetch user data
      const userResponse = await axios.get('http://localhost:4000/api/users/');
      const userData = userResponse.data;
      console.log(userData)
      // Proceed with creating an order
      console.log('body: ',{products, deliveryAddress, totalAmount, userData})
      const response = await axios.post(
        'http://localhost:4000/api/orders/',
        { products, deliveryAddress, totalAmount, userData }
      );
  
      console.log(response.data);
      if (response.data.success) {
        console.log('Displaying toast...');
        setCartProducts([]);
        toast.info(`Thank you for placing an order with Peeksbymn.`, {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      } else {
        alert("error", response.data.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      // Log the detailed error information
      if (error.response) {
        console.error("Server responded with a non-2xx status", error.response.data);
      } else if (error.request) {
        console.error("No response received from server", error.request);
      } else {
        console.error("Error setting up the request", error.message);
      }
    }
  };

  return (
    <>
    
       <Navbar/>
       <Announcement/>
    <div className="co-checkout"
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "Poppins",
        width: "100%",
        marginBottom: '-200px',
        marginTop: '-200px'
      }}
    >
     
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <form className="checkout-form" action="">
            <h1>
              <i className="checkout-title"></i>
              Shipping Details
            </h1>
            <div className="checkout-name">
              <div>
                <label htmlFor="f-name">Name</label>
                <input
                  type="text"
                  name="receiverName"
                  value={deliveryAddress.receiverName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="l-name">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={deliveryAddress.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="checkout-street">
              <label htmlFor="name">Street</label>
              <input
                type="text"
                name="street"
                value={deliveryAddress.street}
                onChange={handleInputChange}
              />
            </div>

            <div className="checkout-street">
              <label htmlFor="name">building</label>
              <input
                type="text"
                name="building"
                value={deliveryAddress.building}
                onChange={handleInputChange}
              />
            </div>
            <div className="checkout-address-info">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={deliveryAddress.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="checkout-street">
                <label htmlFor="name">Address Details</label>
                <input
                  type="text"
                  name="addressDetails"
                  value={deliveryAddress.addressDetails}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="checkout-btns">
              <Link to="/checkout">
                {" "}
                <button  className="btn btn-dark"
                  onClick={(e) => {
                    handleCreateOrder(e);
                  }}
                >
                  Complete Order
                </button>
              </Link>
              <Link to="/addToCart">
                <button className="btn btn-d
                ark  one-chance"style={{padding:'6px',marginTop:'5px'}} >Back to Cart</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default Checkout;
