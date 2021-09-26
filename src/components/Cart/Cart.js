import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown} from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"
const Cart = (props) => {
    const crown = <FontAwesomeIcon icon={faCrown} />
    const {cart} =props;
     const totalReducer = (prevValue,currentValue) => prevValue + currentValue.Cost;
    const total = cart.reduce(totalReducer,0).toFixed(2);

    
    return (
        <div>
             <div className="stadium-info">
            <h2 className="bg-warning fw-bold text-dark rounded">Build Cost</h2>
            <h5>{crown} Favourite-Stadium: {cart.length}</h5>
            <h5>Total-Cost: ${total}M</h5>
        </div>
              <h5 className="fw-bold bg-warning rounded-pill m-4 p-2">STADIUM NAME</h5>
         <div className="stadium-info">
                {
                    cart.map(stadium => <h5 className="stadium-name"><img className="cart-image me-4" src={stadium.img} alt="" /> {stadium.name}</h5>)
                }
            </div>
        </div>
     );   
};

export default Cart;