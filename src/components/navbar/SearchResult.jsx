import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeaderWithProjectId } from '../../utils/configs';
import ProductCard from '../../components/products/ProductCard';

const SearchResult = () => {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        const searchURL = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${term}"}`;
        const response = await fetch(searchURL, getHeaderWithProjectId());
        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [term]);

  return (
    <div>
      <h2 className='search-results'>Search Results for "{term}"</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="productsList-container">
          {searchResults.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>
      )}
    </div>
  );
};

export default SearchResult;
