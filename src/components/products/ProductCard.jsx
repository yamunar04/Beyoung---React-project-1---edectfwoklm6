import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { name, displayImage, _id, price } = props;
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/products/${_id}`);
  };
  return (
    <Link to={`/products/${_id}`} className={style.productCardLink}>
      <section className={`product-card-custom ${style.productCard}`}>
        
        <img
          src={displayImage}
          alt={name}
          height="150"
          width="150"
          className={style.bannerImg}
          onClick={handleImageClick}
        />
        <div className="product-name-price">
          <p className="product-name">{name}</p>
          <h5 className="product-price">₹{price}</h5>
        </div>       
      </section>
    </Link>
  );
};

export default ProductCard;
