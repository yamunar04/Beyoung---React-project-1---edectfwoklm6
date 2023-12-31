import React, { useEffect, useState } from "react";
import { useWishList } from "../../Provider/WishlistProvider";
import "./Wishlist.css";
// import { NavLink } from "react-router-dom";
// import AddToCart from "../Cart/AddToCart/AddToCart";
import Footer from "../Footer/Footer";


export default function Wishlist() {
  const {
    wishList,
    getWishListItems,
    deleteAnItemFromWishList,
    
  } = useWishList();

  useEffect(() => {
    getWishListItems();
  }, [wishList]);
  return (
    <>
      <h3 className="wishlist-h3">
          Your Wishlist
      </h3>

      <div className="wish-list-div">
        {wishList?.map((item,index) => (
          <React.Fragment key={index}>
            <div className="wishlist-card" key={item.products._id}>
              <img src={item.products.displayImage} alt={item.products.name} />
              <div className="wishlist-item-info">
                <p>{item.products.name}</p>
                <h5>₹{item.products.price}</h5>
              </div>
              <div className="wishlist-buttons-div">
                {/* <NavLink to={`/single-product/${item.products._id}`}>
                  <button className="wishlist-delete">                  
                    Add to cart
                  </button>
                </NavLink> */}
                {/* <AddToCart product={product} /> */}

                <button
                  className="wishlist-delete"
                  onClick={() => deleteAnItemFromWishList(item.products._id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
}
