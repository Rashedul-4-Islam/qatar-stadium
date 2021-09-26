import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Stadium.css'
const Cart = (props) => {
    /*========= destructuring area ===========*/
    const {name,place,opening,Capacity,img,Cost} = props.building;
    const shopping = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-md-4">
           
                <div className="card imagess" >
                    <img  src={img} className="card-img" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                        <p className="card-text">{place}</p>
                        <p className="card-text">Opening:{opening}</p>
                        <p className="card-text">Capacity:{Capacity}</p>
                        <p className="card-text">Cost:${Cost}M</p>
                        <button onClick={()=>props.eventHandler(props.building)} href="/" className="btn btn-dark">{shopping} Select to Cart</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;