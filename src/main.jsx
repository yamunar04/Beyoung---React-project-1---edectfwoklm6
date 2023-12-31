import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'
import './index.css'
import UserProvider from './Provider/UserProvider.jsx'
import CartProvider from './Provider/CartProvider.jsx';
import WishListProvider from './Provider/WishlistProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>

            <WishListProvider>
              <App />
            </WishListProvider>

        </CartProvider>
      </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
