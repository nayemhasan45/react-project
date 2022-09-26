import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpster, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart'>
            <div className="cart-text">
                <h5>Order Summary</h5>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h3>Grand Total: $</h3>
            </div>

            <div className='cart-btn'>
                <button>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faDumpster}></FontAwesomeIcon>
                </button>
                <button>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;