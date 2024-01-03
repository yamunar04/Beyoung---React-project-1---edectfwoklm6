import "./SingleProduct.css";
import { projectId, apiUrl } from "../../helper/apiDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../Provider/CartProvider";
import AddToCart from "../Cart/AddToCart/AddToCart";
import { useWishList } from "../../Provider/WishlistProvider";
import { useUser } from "../../Provider/UserProvider";
import { NavLink } from "react-router-dom";

function SingleProduct() {
  // const { cartData, addToCart } = useCartContext();
  const { addToWishList, wishList } = useWishList();
  const [product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState(0);
  const { _id } = useParams();
  const getProduct = async () => {
    const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`, {
      headers: {
        projectId: projectId,
      },
    });
    const jsonData = await response.json();
    setProduct(jsonData.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const {
    // _id,
    images = [""],
    name,
    brand,
    subCategory,
    price,
    description
  } = product;
  const { isUserLoggedIn } = useUser();
  return (
    <>
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="single-product-main-image">
            <img src={images[mainImage]} alt="" />
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h2>
              {name} : {brand}
            </h2>
            <p>Category : {subCategory}</p>
          </div>

          <div className="single-product-price">
            <h2>₹ {price}</h2>
          </div>
          <hr />

          <AddToCart product={product} />
          
          <div className="cart-wishlist-btns">
          <NavLink to={isUserLoggedIn ? "/products/:_id" : "/signin"}>
            <button
              className="single-product-add-to-wishlist-btn"
              onClick={() => addToWishList(_id)}
            >
              Add to wishlist
            </button>
          </NavLink>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h3 className="single-product-description-heading">
              Product Details:
            </h3>
            <p className="single-product-description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;