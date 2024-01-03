import { createContext, useContext, useEffect, useState } from "react";
import { projectId, apiUrl } from "../helper/apiDetails";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [wishListNumber, setWishListNumber] = useState(0);
  const bearerToken = sessionStorage.getItem("authToken");

  const deleteAnItemFromWishList = async (id) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${bearerToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };


  const addToWishList = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        method: "PATCH",
        headers: {
          "projectID": projectId,
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({
          "productId": productId,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

const getWishListItems = async () => {
    try {
      const delay = 1000; 
      await new Promise(resolve => setTimeout(resolve, delay)); // Introduce delay
  
      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      const jsonData = await response.json();
      setWishListNumber(jsonData.results);
      setWishList(jsonData?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <WishListContext.Provider
      value={{
        wishListNumber,
        wishList,
        addToWishList,
        getWishListItems,
        deleteAnItemFromWishList, 
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};

export default WishListProvider;