import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import thankYouImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    const handleRemoveProduct = (productKey) => {
        //console.log('Clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            //console.log(product);
            return product;

        });
        setCart(cartProducts);

    }, [])
    let thankYou;
    if (orderPlace){
        thankYou = <img src={thankYouImage} alt=""></img>;
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem key={pd.key} product={pd} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='main-button' onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;