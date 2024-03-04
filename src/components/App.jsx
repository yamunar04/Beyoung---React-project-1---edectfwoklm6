import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import Navbar from "./navbar/Navbar";
import Home from "../pages/Home";
import MenProductsList from "../pages/Men";
import WomenProductsList from "../pages/Women";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cart from "./Cart/Cart";
import Combos from "../pages/Combos/Combos";
import Joggers from "../pages/Joggers/Joggers";
import SingleProduct from "./products/SingleProduct";
import Wishlist from "./Wishlist/Wishlist";
import CheckOut from "./CheckOut/CheckOut";
import SearchResult from "./navbar/SearchResult";
import JoggersMen from "../pages/Categories/JoggersMen";
import ShortsMen from "../pages/Categories/ShortsMen";
import PayjamasMen from "../pages/Categories/PayjamasMen";
import TshirtMen from "../pages/Categories/TshirtMen";
import ShirtMen from "../pages/Categories/ShirtMen";
import JeansWomen from "../pages/Categories/JeansWomen";
import JoggersWomen from "../pages/Categories/JoggersWomen";
import Jumpsuits from "../pages/Categories/Jumpsuits";
import Kurtas from "../pages/Categories/Kurtas";
import TshirtWomen from "../pages/Categories/TshirtWomen";

export const cartContext = createContext();
export const dataContext = createContext();

const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    brand: "",
    color: ""
  });
  const [userName, setUserName] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <dataContext.Provider value={{ data, setData, filter, setFilter }}>
      <cartContext.Provider value={{ cart, setCart, userName }}>
      
        <div className="App">
          
          <Navbar />
          <div style={{ marginTop: "8rem" }}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:_id" element={<SingleProduct />} />
            <Route path="/men" element={<MenProductsList />} />
            <Route path="/women" element={<WomenProductsList />} />
            <Route path="/combos" element={<Combos />} />
            <Route path="/joggers" element={<Joggers />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/search/:term" element={<SearchResult />} />
            <Route path="/joggersmen" element={<JoggersMen />} />
            <Route path="/shortsmen" element={<ShortsMen />} />
            <Route path="/payjamasmen" element={<PayjamasMen />} />
            <Route path="/tshirtmen" element={<TshirtMen />} />
            <Route path="/shirtmen" element={<ShirtMen />} />
            <Route path="/jeanswomen" element={<JeansWomen />} />
            <Route path="/joggerswomen" element={<JoggersWomen />} />
            <Route path="/jumpsuits" element={<Jumpsuits />} />
            <Route path="/kurtas" element={<Kurtas />} />
            <Route path="/tshirtwomen" element={<TshirtWomen />} />
          </Routes>
        </div>
      </cartContext.Provider>
    </dataContext.Provider>
  );
};

export default App;


