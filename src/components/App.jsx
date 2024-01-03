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
import Kids from "../pages/Kids/Kids";
import Accessories from "../pages/Accessories/Accessories";
import SingleProduct from "./products/SingleProduct";
import Wishlist from "./Wishlist/Wishlist";
import CheckOut from "./CheckOut/CheckOut";
import SearchResult from "./navbar/SearchResult";

export const cartContext = createContext();
export const dataContext = createContext();
// const HomeWithRouter = withRouter(Home);

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
          <div style={{ marginTop: "6rem" }}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:_id" element={<SingleProduct />} />
            <Route path="/men" element={<MenProductsList />} />
            <Route path="/women" element={<WomenProductsList />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/search/:term" element={<SearchResult />} />
          </Routes>
        </div>
      </cartContext.Provider>
    </dataContext.Provider>
  );
};

export default App;


