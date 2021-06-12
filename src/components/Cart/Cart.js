import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const price = cart.reduce((total , prd)=> (total + prd.price * prd.quantity), 0);
    

    let shipping = 0;
    if(price > 35){
        shipping = 0;
    }
    else if(price > 15){
        shipping = 4.99
    }
    else if(price > 0){
        shipping = 12.99
    }

    const tax = (price / 10);

    const grandTotal = price + shipping + tax;


    const numberFormat = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }



    return (
        <div>
            <h1>Order Summary:</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {numberFormat(price)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {numberFormat(tax)}</p>
            <p>Total Price: {numberFormat(grandTotal)}</p><br />
            {props.children}
        </div>
    );
};

export default Cart;