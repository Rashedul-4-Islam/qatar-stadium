import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart} =props;
     const totalReducer = (prevValue,currentValue) => prevValue + currentValue.Cost;
    const total = cart.reduce(totalReducer,0);

    
    return (
        <div className="stadium-info">
            <h3>Stadium:{cart.length}</h3>
            <h4>Total-Cost:${total}M</h4>
            <div>
                {
                    cart.map(stadium => <h5 className="stadium-name">{stadium.name}</h5>)
                }
            </div>
            
        </div>
    );
};

export default Cart;