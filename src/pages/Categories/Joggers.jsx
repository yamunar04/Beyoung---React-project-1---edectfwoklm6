import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Jeans.css";
import { getHeaderWithProjectId } from "../../utils/configs";
import ProductCard from "../../components/products/ProductCard";
import ProductsProvider from "../../Provider/ProductsProvider";
import { useNavigate } from "react-router-dom"; 

const Joggers = ({ product_for }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
  
    const navigate = useNavigate();
  
    const fetchProducts = async () => {
      const config = getHeaderWithProjectId();
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter=%7B%22subCategory%22%3A%22jogger%22%7D&limit=10",
          config
        );
        const productsListData = response.data.data;
        setProductsList(productsListData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const handleImageClick = (id) => {
      navigate(`/${product_for}/productModal/${id}`);
    };
  
    return (
      <ProductsProvider>
        {isLoading ? (
          <div className="loader">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="main-container-section">
              <div className="mainDisplay">
                {productsList.length > 0 ? (
                  <section className="productsList-container">
                    {productsList.map((product, _id) => (
                      <ProductCard
                        key={_id}
                        {...product}
                        onImageClick={() => handleImageClick(product.id)}
                      />
                    ))}
                  </section>
                ) : (
                  <div>No joggers products available.</div>
                )}
              </div>
            </div>
          </>
        )}
      </ProductsProvider>
    );
  };
  
  export default Joggers;
  


