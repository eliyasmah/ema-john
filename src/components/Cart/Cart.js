
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let price = 0;
    let shipping = 0;
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }

    let tex = 0;
    tex = parseInt((price * 10 / 100).toFixed(2));
    const total = price + shipping + tex;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Items: {props.cart.length} </p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tex}</p>
            <p>Grand Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;