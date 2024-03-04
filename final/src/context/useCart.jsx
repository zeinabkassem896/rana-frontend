import { useContext } from "react";
import { CartContext } from "./cartContext.jsx";

export const useCart = () => {
  const {
    cartProducts,
    setCartProducts,
    addToCart,
    removeFromCart,
    handleIncrement,
    handleDecrement,
  } = useContext(CartContext);

  return {
    cartProducts,
    setCartProducts,
    addToCart,
    removeFromCart,
    handleIncrement,
    handleDecrement,
  };
};
