import React, { useContext } from 'react';

import './FoodItem.css';
import { StoreContext } from '../../Context/StoreContext';
import ratingStarts from '../../assets/frontend_assets/rating_starts.png'
import add_icon_white from '../../assets/frontend_assets/add_icon_white.png'
import remove_icon_red from '../../assets/frontend_assets/remove_icon_red.png'
import add_icon_green from '../../assets/frontend_assets/add_icon_green.png'



const FoodItem = ({ id, name, price, description, image }) => {

   
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


  return (
    <div className='food-item'> 
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=""/>
        {!cartItems[id]
           ?<img className='add' onClick={()=>addToCart(id)} src={add_icon_white} alt=" "/>
           :<div className='food-item-counter'>
               <img onClick={()=>removeFromCart(id)}src={remove_icon_red} alt=""/>
               <p>{cartItems[id]}</p>
               <img onClick={()=>addToCart(id)}src={add_icon_green} alt=""/>
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={ratingStarts} alt=" "/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;