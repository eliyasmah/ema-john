
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className="product">
            <img src={img} alt="show" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.handlerAddToCart(props.product)} className="cart-btn">Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;