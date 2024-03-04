import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import { useNavigate } from "react-router-dom"; 
import { getHeaderWithProjectId } from '../utils/configs';
import ProductCard from '../components/products/ProductCard';
import ProductsProvider from '../Provider/ProductsProvider';
import Footer from '../components/Footer/Footer';
import Carousel1 from '../components/Carousel/Carousel';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
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

      <img src='https://www.beyoung.in/api/catalog/homepage-28/strip-desktop.png' className='home-image1'></img>
      <img src='https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/strip.jpg' className='home-image2'></img>

      <div className='for-men'>
        <p>FOR MEN</p>
      </div>

      <div className='men-section'>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg' onClick={()=>navigate("/tshirtmen")}></img>

        </div>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg' onClick={()=>navigate("/shirtmen")}></img>

        </div>
        <div>
          <img src='https://bewakoof-clone-sigma.vercel.app/assets/shorts-49d29889.jpg' onClick={()=>navigate("/shortsmen")}></img>

        </div>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg' onClick={()=>navigate("/joggersmen")}></img>

        </div>
        <div>
          <img src='https://bewakoof-clone-sigma.vercel.app/assets/menPayjamas-ae4baa29.webp' onClick={()=>navigate("/payjamasmen")}></img>
        </div>
      </div>

      <div className='for-women'>
        <p>FOR WOMEN</p>
      </div>
      <div className='women-section'>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg' onClick={()=>navigate("/tshirtwomen")}></img>

        </div>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp' onClick={()=>navigate("/kurtas")}></img>
          
        </div>
        <div>
          <img src='	https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg' onClick={()=>navigate("/jumpsuits")}></img>

        </div>
        <div>
          <img src='https://bewakoof-clone-sigma.vercel.app/assets/joggers-women-1e61212e.webp' onClick={()=>navigate("/joggerswomen")}></img>

        </div>
        <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg' onClick={()=>navigate("/jeanswomen")}></img>
        </div>
      </div>
      
      {/* {isLoading ? (
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
      )} */}
      <Footer />
    </ProductsProvider>
  );
};

export default Home;
