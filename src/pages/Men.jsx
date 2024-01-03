import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../App.css";
import { getHeaderWithProjectId } from "../utils/configs";
import ProductCard from "../components/products/ProductCard";
import ProductsProvider from "../Provider/ProductsProvider";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom"; 

const MenProductsList = ({product_for }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    const [filter, setFilter] = useState({
        gender: "Male",
        color: false,
        category: false,
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        setIsLoading(false);
        console.log("Hello");
    }, [filter]);

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();
        try {
            setIsLoading(true);
            const products = await axios.get(
                "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100",
                config
            );
            console.log("products", products);
            const productsListData = products.data.data;
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

    const menProductsList = productsList.filter((product) => product.gender === "Men");

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
                            {menProductsList.length > 0 ? (
                                <section className="productsList-container">
                                    {menProductsList.map((product, _id) => (
                                        <ProductCard
                                            key={_id}
                                            {...product}
                                            onImageClick={() => handleImageClick(product.id)}
                                        />
                                    ))}
                                </section>
                            ) : (
                                <div>No men's products available.</div>
                            )}
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </ProductsProvider>

    );
};

export default MenProductsList;


