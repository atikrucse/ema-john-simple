import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const data10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(data10); //State
    const [cart, setCart] = useState([]); // State for count cart

    const handleAddProduct = (products) => {
        console.log('Clicked', products);
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">   
                {
                    product.map(x => <Product 
                    handleAddProduct = {handleAddProduct}
                    product={x}
                    >

                    </Product>)
                }
            </div>
            <div className="card-container">

                <Cart cart ={cart}></Cart>

                {/* <h1>This is card</h1>
                <h5>Order Summery: {cart.length}</h5> */}
            </div>
            
        </div>
    );
};

export default Shop;