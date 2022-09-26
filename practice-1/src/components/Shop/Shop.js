import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    const [cart, setCart] = useState([]);
    const addTOSummary = (product) => {
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    }
    return (
        <div className='shopDisplay'>
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addTOSummary={addTOSummary}
                    ></Product>)
                }
            </div>
            <div className="summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;