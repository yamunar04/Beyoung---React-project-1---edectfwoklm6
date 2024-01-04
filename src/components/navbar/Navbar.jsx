import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import "../../App.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink className='nav-links' to="/">
                    <Logo />
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
                        <NavLink className='nav-links' to='/Kids'>
                            Kids
                        </NavLink>
                    </li>
                    <li className='link-item'>
                        <NavLink className='nav-links' to='/Accessories'>
                            Accessories
                        </NavLink>
                    </li>
                </ul>
                <SearchBar />
                <Profile />

                <ul>
                    <li className='link-item'>
                        <NavLink className='nav-links ' to='/Wishlist'>
                            <div className="navbar-wishlist">
                                <FaRegHeart size={20} />
                            </div>
                        </NavLink>
                        <NavLink className='nav-links cart' to='/Cart'>
                            <div className="navbar-cart">
                                <FaShoppingCart size={20} />
                            </div>

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar;