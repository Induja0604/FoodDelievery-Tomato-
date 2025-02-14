

import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/frontend_assets/logo.png"
import basket_icon from "../../assets/frontend_assets/basket_icon.png"
import search_icon from "../../assets/frontend_assets/search_icon.png"
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");

   const{getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className='navbar'>
     <Link to='/'><img src={logo} alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link  to='/' onClick={()=>setMenu("home")} className={menu=== "home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a  href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <a href="#food-display"><img src={search_icon} alt=" "/></a>
      <div className="navbar-search-icon">
        <Link to='/cart'><img src={basket_icon} alt=""/></Link>
        <div className={getTotalCartAmount()===0?" ":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
