import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../App.css";
import { getHeaderWithProjectId } from "../utils/configs";
import ProductCard from "../components/products/ProductCard";
import ProductsProvider from "../Provider/ProductsProvider";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom"; 

const WomenProductsList = ({ data, nextCall, hasMore, product_for }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    const [womenProductsList,setWomenProductsList] = useState([]);
    const [filter, setFilter] = useState({
        gender: "Female",
        color: false,
        category: false,
    });

    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        setIsLoading(false);
    }, [filter]);

    const fetchProducts = async () => {
        const config = getHeaderWithProjectId();
        try {
            setIsLoading(true);
            const products = await axios.get(
                "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=300",
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

    useEffect(()=>{    
        setWomenProductsList(productsList.filter((product) => product.gender === "Women"))
    },[productsList]);
    

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
                            {womenProductsList.length > 0 ? (
                                <section className="productsList-container">
                                    {womenProductsList.map((product, _id) => (
                                        <ProductCard
                                            key={_id}
                                            {...product}
                                            onImageClick={() => handleImageClick(product.id)}
                                        />
                                    ))}
                                </section>
                            ) : (
                                <div>No women's products available.</div>
                            )}
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </ProductsProvider>

    );
};

export default WomenProductsList;



