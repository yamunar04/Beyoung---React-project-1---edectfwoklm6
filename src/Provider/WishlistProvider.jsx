import { createContext, useContext, useState } from "react";
import { projectId, apiUrl,getAuthHeaderConfig } from "../helper/apiDetails";
import axios from 'axios';

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [wishListNumber, setWishListNumber] = useState(0);
  const authToken = JSON.parse(localStorage.getItem("authToken"));
  const headers = getAuthHeaderConfig();

  const deleteAnItemFromWishList = async (id) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };


  const addToWishList = async (productId) => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    console.log(productId, projectId, authToken)
    
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        method: "PATCH",
        headers: {
          projectID: projectId,
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
         
        },
        body: JSON.stringify({
          productId: productId,
        }),    
      });   
      const data = await response.json();     
    } catch (error) {
      console.log(error);
    }
  };
  //  const addToWishList = async (body) => {
  //   // console.log(productId, projectId, authToken)
    
  //   try {
  //     const response = await axios.patch(`${apiUrl}ecommerce/wishlist`, {
  //       headers,
  //       body,    
  //     });        
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getWishListItems = async () => {
    try {
      const delay = 1000;
      await new Promise(resolve => setTimeout(resolve, delay)); // Introduce delay

      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
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


