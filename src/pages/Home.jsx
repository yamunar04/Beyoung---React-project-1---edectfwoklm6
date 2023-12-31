import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import { getHeaderWithProjectId } from '../utils/configs';
import ProductCard from '../components/products/ProductCard';
import ProductsProvider from '../Provider/ProductsProvider';
import Footer from '../components/Footer/Footer';
import Jeans from './Categories/Jeans';
import Shirts from './Categories/Shirts';
import Joggers from './Categories/Joggers';
import Hoodies from './Categories/Hoodies';
import Carousel1 from '../components/Carousel/Carousel';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchProducts = async () => {
    const config = getHeaderWithProjectId();
    try {
      setIsLoading(true);
      const products = await axios.get(
        'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10',
        config
      );
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


  return (
    <ProductsProvider>
      <Carousel1 />
      <div className="home-hoodies">
        <h3>Hoodies</h3>
        <Hoodies />
      </div>
      <div className="home-shirts">
        <h3>Shirts</h3>
        <Shirts />
      </div>
      <div className="home-joggers">
        <h3>Joggers</h3>
        <Joggers />
      </div>
      <div className="home-jeans">
        <h3>Jeans</h3>
        <Jeans />
      </div>
      <div className="home-all">
        <h3>All Categories</h3>
      </div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <section className="productsList-container">
            {searchResults.length > 0
              ? searchResults.map((product, i) => (
                  <ProductCard key={i} {...product} />
                ))
              : productsList.map((product, i) => <ProductCard key={i} {...product} />)}
              
          </section>
          <Footer />
        </>
      )}
    </ProductsProvider>
  );
};

export default Home;
