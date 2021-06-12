import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const data10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(data10); //State
    const [cart, setCart] = useState([]); // State for count cart

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;

        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // console.log(cart);
        // const newCart = [...cart, products];
        setCart(newCart);
        // const sameProduct =  newCart.filter(pd => pd.key === products.key);
        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);

    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    product.map(product => <Product
                        key={product.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={product}
                    >

                    </Product>)
                }
            </div>
            <div className="card-container">

                <Cart cart={cart}>
                    <Link to={"/review"}>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>

                {/* <h1>This is card</h1>
                <h5>Order Summery: {cart.length}</h5> */}
            </div>

        </div>
    );
};

export default Shop;