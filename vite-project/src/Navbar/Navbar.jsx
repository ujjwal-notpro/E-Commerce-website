import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="" />
          <p>𝒞𝓁𝑜𝓉𝒽𝒷𝒶𝓏𝒶𝒶𝓇</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to="/loginsignup">Login</Link></button>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems ? getTotalCartItems() : 0}</div>
      </div>
    </div>
  )
}

export default Navbar
