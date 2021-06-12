import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import {Link } from 'react-router-dom';

const Product = (props) => {
    
    const {name, img, seller, price, stock, key} = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-detail'>
                <h3><Link to={'/product/' + key}>{name}</Link></h3>
                <h6>By: {seller}</h6>
                <h2>$ {price}</h2>
                <h6>only {stock} left in stock - order soon</h6>
                {props.showAddToCart && <button 
                className='main-button'
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;