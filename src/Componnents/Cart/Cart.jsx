import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {                //option 3
    // const cart = props.cart;           //option 1
    // const {cart} = props;             //option 2
    // console.log(cart)

    let total =0;
    let shipping=0;

    for(const product of cart){

         total = total + product.price;

         shipping= shipping + product.shipping;
    }

    const tax = total*7/100;

    const grandTotal= total + shipping + tax;

    return (
        <div className='cart'>            
            <h4>Order summery</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h5>Grand Total:${grandTotal.toFixed(0)}</h5>
        </div>
    );
};

export default Cart;