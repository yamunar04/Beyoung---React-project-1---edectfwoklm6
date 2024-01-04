import { createContext, useContext, useEffect, useState } from "react";
import { projectId, apiUrl } from "../helper/apiDetails";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const authToken = sessionStorage.getItem("authToken");
  const [cartData, setCartData] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartData = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setCartData(data?.data?.items);
      setCartNumber(data?.results);
      setCartTotal(data?.data?.totalPrice);
    } catch (error) {
      console.log("Error fetching cart", error);
    }
  };

  const addToCart = async (productId, quantity, size) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart/${productId}`, {
        method: "PATCH",
        headers: {
          projectID: projectId,
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          quantity: quantity,
          size: size,
        }),
      });
    } catch (error) {
      console.log("Error adding product into cart", error);
    }
  };


  const deleteAnItemFromCart = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart/${productId}`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await response.json();

      console.log(data.data);

      setCartData(data.data.items);
      setCartTotal(data.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    cartNumber,
    cartData,
    cartTotal,
    addToCart,
    getCartData,
    deleteAnItemFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
