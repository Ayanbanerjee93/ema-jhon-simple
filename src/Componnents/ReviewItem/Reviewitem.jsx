import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const Reviewitem = ({product,handleRemoveFromCart}) => {
    
    const{id,img,price,name, quantity} = product;
    
    return (
        <div className='review-item'>
            <img src={img}></img>

            <div className="item-details">

            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>$</span>{price}</p>
                <p>Order Quantity:{quantity}</p>
            </div>
                
           <div className="btn-div">
           <button onClick={()=> handleRemoveFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
           </div>

            </div>
           
        </div>
    );
};

export default Reviewitem;