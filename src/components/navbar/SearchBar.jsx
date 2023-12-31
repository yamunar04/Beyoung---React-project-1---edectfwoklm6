// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate(`/search/${searchTerm}`);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//         className="search-input"
//       />
//       <button className="search-button" onClick={handleSearch}>
//         <FaSearch size={25} />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const handlePageReload = () => {
      // Check if it's a page reload
      if (window.performance.navigation.type === 1) {
        setSearchTerm('');
      }
    };

    window.addEventListener('beforeunload', handlePageReload);

    return () => {
      window.removeEventListener('beforeunload', handlePageReload);
    };
  }, []);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch size={25} />
      </button>
    </div>
  );
};

export default SearchBar;

