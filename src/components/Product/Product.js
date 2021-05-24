import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const {name, img, seller, price, stock} = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-detail'>
                <h3>{name}</h3>
                <h6>By: {seller}</h6>
                <h2>$ {price}</h2>
                <h6>only {stock} left in stock - order soon</h6>
                <button 
                className='main-button'
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;