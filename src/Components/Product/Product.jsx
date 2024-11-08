import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img , name , seller , price, ratings } = props.product;

    const handelAddToCart = () => {
        console.log('Added');
    }

    return (
        <div className='product'>

            <img src= {img}></img>

            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Menufecturer: {seller}</p>
                <p>Raitings: {ratings} starts</p>
            </div>
            <button onClick={handelAddToCart} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;