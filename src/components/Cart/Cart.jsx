import React, { useEffect } from "react";
import { useCartContext } from "../../Provider/CartProvider";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";

function Cart(_id) {
  const {
    cartData,
    cartTotal,
    getCartData,
    deleteAnItemFromCart,
    authToken,
  } = useCartContext();

  const {
    authTokenData,
    setAuthTokenData
  } = useUser();

  const navigate = useNavigate();
  const handleCheckOutClick = () => {
    navigate(`/checkout`);
  };
  useEffect(() => {
    getCartData();
  }, [authToken]);
  console.log("cart",authTokenData);

  return (
    <>
      <h3 className="cart-page-h3">Cart Details</h3>
      <div className="cart-item-div">
        {cartData &&
          cartData.map((cartItem) => (
            <div key={cartItem.product._id} className="cart-item-card">
              <div className="cart-item-details">
                <div className="cart-item-img">
                  <NavLink to={`/single-product/${cartItem.product._id}`}>
                    <img
                      src={cartItem.product.displayImage}
                      alt={cartItem.product.name}
                    />
                  </NavLink>
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-info-name">{cartItem.product.name}</p>
                  <p className="cart-item-info-size">Size:{cartItem.size}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <p>Quantity : {cartItem.quantity}</p>
              </div>
              <div className="cart-item-price">
                <p>Price : ₹{cartItem.product.price}</p>
              </div>
              <div className="cart-item-total">
                <p>Total : ₹{cartItem.product.price * cartItem.quantity}</p>
              </div>
              <button
                className="cart-item-delete-btn"
                onClick={() => deleteAnItemFromCart(cartItem?.product._id)}
              >
                Delete
              </button>

            </div>
          ))}
      </div>
      <div className="cart-total-div">
        <button
          className="cart-item-checkout-btn"
          onClick={handleCheckOutClick}
        >
          CheckOut
        </button>
        <h4>Grand Total : ₹{cartTotal}</h4>
        <div className="cart-totat-buttons-div">
          <NavLink to="/">
            <button>Continue Shopping</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;