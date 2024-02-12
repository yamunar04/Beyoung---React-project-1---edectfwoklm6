import React from 'react';
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <h3>ONLINE SHOPPING</h3>
        <ul>
          <li><NavLink to='/Men'>Men</NavLink></li>
          <li><NavLink to='/Women'>Women</NavLink></li>
          <li><NavLink to='/Kids'>Kids</NavLink></li>
          <li><NavLink to='/Accessories'>Accessories</NavLink></li>
        </ul>
      </div>
      <div className="footer-links" id='footer-div'>
        <h3>CUSTOMER POLICIES</h3>
        <ul>
          <li><NavLink to="/">Contact Us</NavLink></li>
          <li><NavLink to="/">FAQ</NavLink></li>
          <li><NavLink to="/">T&C</NavLink></li>
          <li><NavLink to="/">Terms Of Use</NavLink></li>          
          <li><NavLink to="/">Privacy policy</NavLink></li>          
        </ul>
      </div>
      <div className="footer-links" id='footer-div'>
        <h3>DOWNLOAD THE APP</h3>
        <ul className='footer-ul'>
          <img onClick={()=>window.location.href="https://play.google.com/store/apps/details?id=com.beyoungapp"} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
          <img onClick={()=> window.location.href="https://apps.apple.com/in/app/beyoung/id1665513310"} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />

        </ul>
      </div>
      
    </div>
  );
}

export default Footer;