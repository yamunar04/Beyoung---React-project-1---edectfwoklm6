import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import "../../App.css";
import { SlLocationPin } from "react-icons/sl";

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <div className="firstSlide">
                        <span >
                            Free Shipping on All Orders |
                        </span>
                        &nbsp;Get Extra ₹100 OFF on Spent of ₹999 Use Code:
                        <span > BEYOUNG100</span>
                    </div>
                    <div className="secondSlide">
                        <SlLocationPin className="secondSlide-icon"/>
                        <span className="secondSlide-span">Track Your Order</span>
                    </div>
                    <div className="navbar-container2">
                        <NavLink className='nav-links' id="nav-link" to="/">                        
                            <h2>BEYOUNG</h2>
                        </NavLink>

                        <ul className='nav-links'>
                            <li className='link-item'>
                                <NavLink className='nav-links' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='link-item'>
                                <NavLink className='nav-links' to='/Men'>
                                    Men
                                </NavLink>
                            </li>
                            <li className='link-item'>
                                <NavLink className='nav-links' to='/Women'>
                                    Women
                                </NavLink>
                            </li>
                            <li className='link-item'>
                                <NavLink className='nav-links' to='/Combos'>
                                    Combos
                                </NavLink>
                            </li>
                            <li className='link-item'>
                                <NavLink className='nav-links' to='/Joggers'>
                                    Cargo Joggers
                                </NavLink>
                            </li>
                        </ul>
                        <SearchBar />

                        <ul>
                            <li className='link-item' id="nav-link">
                                <Profile />
                                <NavLink className='nav-links' id="nav-link" to='/Wishlist'>
                                    <div className="navbar-wishlist">
                                        <FaRegHeart size={20} />
                                    </div>
                                </NavLink>
                                <NavLink className='nav-links cart' id="nav-link" to='/Cart'>
                                    <div className="navbar-cart">
                                        <FaShoppingCart size={20} />
                                    </div>

                                </NavLink>
                            </li>
                        </ul>
                    </div>


                </nav>
            </div>
        </>


    )
}

export default Navbar;