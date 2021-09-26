import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart} =props;
     const totalReducer = (prevValue,currentValue) => prevValue + currentValue.Cost;
    const total = cart.reduce(totalReducer,0);

    
    return (
        <div className="stadium-info">
            <h2 className="bg-warning fw-bold text-dark rounded">Build Cost</h2>
            <h4>Stadium:{cart.length}</h4>
            <h5>Total-Cost: ${total}M</h5>
            <div>
                {
                    cart.map(stadium => <h5 className="stadium-name">{stadium.name}</h5>)
                }
            </div>
            
        </div>
    );
};

export default Cart;