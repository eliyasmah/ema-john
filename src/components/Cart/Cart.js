
import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {props.cart.length} </p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <p>Grand Total: $</p>
        </div>
    );
};

export default Cart;