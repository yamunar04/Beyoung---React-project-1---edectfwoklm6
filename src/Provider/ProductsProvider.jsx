import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
    const [selectedProduct, setSelectedProduct] = useState({});
    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }} >
            {children}
        </ProductContext.Provider>
    )
};

export const useProduct = () => useContext(ProductContext);

export default ProductProvider;