

import React from 'react'
import './Footer.css'
import logo from '../../assets/frontend_assets/logo.png'
import facebook_icon from '../../assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../../assets/frontend_assets/twitter_icon.png'
import linked_in_icon from '../../assets/frontend_assets/linkedin_icon.png'




const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={logo} alt=" "/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo inventore accusamus voluptates commodi illum, maxime tempora iusto natus eaque. Quidem in cum voluptate, sunt placeat voluptates laboriosam quae id.</p>
            <div className='footer-social-icons'>
                <img src={facebook_icon} alt=" "/>
                <img src={twitter_icon} alt=" "/>
                <img src={linked_in_icon} alt=" "/>
            </div>
     </div>
     <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Aboutus</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
            </ul> 
     </div>
     <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li><a href="#">+91 1234567890</a></li>
            <li><a href="#">contact@tomato.com</a></li>
        </ul>
     </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 &copy; tomoto.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
