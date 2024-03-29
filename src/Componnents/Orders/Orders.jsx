import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../ReviewItem/Reviewitem';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart= useLoaderData();
    const [cart , setCart] = useState(savedCart);
    
    const handleRemoveFromCart = (id) =>{
        const remaining= cart.filter(product=> product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className="review-container">
           {
            cart.map(product => <Reviewitem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Reviewitem>)
           }

            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;