import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpster, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shippingCost = 0;
    for (const product of cart) {
        total += product.price;
        shippingCost += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(4));
    const grandTotal = total + shippingCost + tax;
    return (
        <div className='cart'>
            <div className="cart-text">
                <h5>Order Summary</h5>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
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