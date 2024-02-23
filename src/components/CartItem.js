import React from 'react';
import "../App.css";

const CartItem = ({ price }) => {
    return(
        <div className='container'>
            <div className='cart_panel'>
                <h3>Subtotal: {price} </h3>
                <button type='button' className='pill'> Order </button>
                <button type='button' className='pill'> Clear All </button>

            </div>
        </div>
    );
}

export default CartItem;