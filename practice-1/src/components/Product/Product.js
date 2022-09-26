import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>price: $ {price}</p>
                <br />
                <small>Manufacturer : {seller}</small> <br />
                <small>Rating : {ratings} star</small>
            </div>
            <button onClick={() => props.addTOSummary(props.product)} className='btn'>
                Add to Cart
                <FontAwesomeIcon className='btn-icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;