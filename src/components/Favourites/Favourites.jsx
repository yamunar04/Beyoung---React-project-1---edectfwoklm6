import React, { useEffect, useState } from 'react';
import "./Favourites.css";

function Favorites() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    return (
        <div className='favorite-component'>
            <h2>Favorites</h2>
            {/* Use the below HTML to show the favorite products */}
            <div className='favorite-product'>
                <img
                    src="product-image"
                    alt="product-title"
                    className="favorite-product-image"
                />
                <div className='favorite-product-details'>
                    <h4>product-title</h4>
                    <p>Price: &#8377; product-price</p>
                    <button>Remove from Favorites</button>
                </div>
            </div>

            <p className='favorite-para'>No favorite product found.</p>
        </div>
    )
}

export default Favorites;