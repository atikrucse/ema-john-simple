import React from 'react';

const ReviewItem = (props) => {
    //console.log(props)
    const handleRemoveProduct = props.handleRemoveProduct;
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle ={
        borderBottom: '1px solid gold',
        marginLeft: '100px',
        marginBottom: '5px',
        paddingBottom: '5px',
    }
    return (
        <div style={reviewItemStyle}>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <br />
            <button className="main-button" onClick={() => handleRemoveProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;