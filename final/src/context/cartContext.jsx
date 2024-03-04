import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconExclamation from "../assets/exclamation.svg";
import pinktick from "../assets/pinktick.svg";
import "./cart.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const storedCartProducts =
      JSON.parse(localStorage.getItem("cartProducts")) || [];
    return storedCartProducts;
  });
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/products'
        );
        setAllProducts(response.data.data);
        console.log('aaaaaabbbssss',response.data.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    const existingProduct = cartProducts.find((p) => p._id === product._id);
    if (existingProduct) {
      if (existingProduct.quantity < existingProduct.maxQuantity) {
        setCartProducts((prevCartProducts) =>
          prevCartProducts.map((p) =>
            p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
          )
        );
        toast.success(`Product added to Cart`, {
          icon: <img src={pinktick} width={22} alt="abv" />,
          progressStyle: {
            background: "#FCE5EF",
          },
          position: "top-center",
          autoClose: 2000,
          closeButton: false,
          draggable: true,
          pauseOnHover: false,
        });
      } else {
        toast.error(
          `Product ${product.title} available quantity reached ${product.maxQuantity} the maximum `,
          {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
          }
        );
      }
    } else {
        setCartProducts((prevCartProducts) => [
          ...prevCartProducts,
          { ...product, quantity: 1 },
        ]);
        toast.success(`Product ${product.title} added to Cart`, {
          icon: <img src={pinktick} width={22} alt="abv" />,
          progressStyle: {
            background: "#FCE5EF",
          },
          position: "top-center",
          autoClose: 2000,
          closeButton: false,
          draggable: true,
          pauseOnHover: false,
        });
      // if (product?.maxQuantity > 0) {
      //   setCartProducts((prevCartProducts) => [
      //     ...prevCartProducts,
      //     { ...product, quantity: 1 },
      //   ]);
      //   toast.success(`Product ${product.productName} added to Cart`, {
      //     icon: <img src={pinktick} width={22} alt="abv" />,
      //     progressStyle: {
      //       background: "#FCE5EF",
      //     },
      //     position: "top-center",
      //     autoClose: 2000,
      //     closeButton: false,
      //     draggable: true,
      //     pauseOnHover: false,
      //   });
      // } else {
      //   toast.error(
      //     `Product ${product.productName} available quantity reached ${product.maxQuantity} the maximum `,
      //     {
      //       position: "top-center",
      //       autoClose: 2000,
      //       closeButton: false,
      //       draggable: true,
      //       pauseOnHover: false,
      //     }
      //   );
      // }
    }
  };

  const removeFromCart = (index) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((_, i) => i !== index)
    );

    // toast(confirmationComponent, {
    //   progressStyle: {
    //     background: "rgb(251, 213, 229)",
    //   },
    //   position: "top-center",
    //   autoClose: 3000,
    //   closeButton: false,
    //   draggable: true,
    //   pauseOnHover: false,
    // });
  };
  // const removeFromCart = (product) => {
  //   console.log('removeFromCart ',removeFromCart)
  //   const confirmationComponent = (
  //     <div className="reactToastifyConfirmationBody">
  //       <div className="toastPandImage">
  //         <img className="" src={IconExclamation} alt="" />
  //         <p>Are you sure you want to remove this product from the cart? </p>
  //       </div>
  //       <div className="reactToastifyConfirmationButtons">
  //         <button
  //           onClick={() => {
  //             setCartProducts((prevCartProducts) =>
  //               prevCartProducts.filter((p) => p._id !== product._id)
  //             );
  //             toast.dismiss();
  //           }}
  //         >
  //           Yes
  //         </button>
  //         <button onClick={() => toast.dismiss()}>Cancel</button>
  //       </div>
  //     </div>
  //   );  
  //   toast(confirmationComponent, {
  //     progressStyle: {
  //       background: "rgb(251, 213, 229)",
  //     },
  //     position: "top-center",
  //     autoClose: 3000,
  //     closeButton: false,
  //     draggable: true,
  //     pauseOnHover: false,
  //   });
  // };
  
  const handleIncrement = (product) => {
      setCartProducts((prevCartProducts) =>
      cartProducts.map((each) =>
          each._id === product._id
            ? { ...each, quantity: each.quantity + 1 }
            : each
        )
      );
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((each) =>
          each._id === product._id
            ? { ...each, quantity: each.quantity - 1 }
            : each
        )
      );
    } 
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
