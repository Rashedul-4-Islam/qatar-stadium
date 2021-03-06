import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import './Stadium.css'
const Cart = (props) => {
    /*========= destructuring area ===========*/
    const {name,place,opening,Capacity,img,Cost} = props.stadium;
    const crown = <FontAwesomeIcon icon={faCrown} />
    return (
        <div className="col-md-4">
           
                <div className="card imagess" >
                    <img  src={img} className="card-images" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                        <p className="card-text">{place}</p>
                        <p className="card-text">Opening:{opening}</p>
                        <p className="card-text">Capacity:{Capacity}</p>
                        <p className="card-text">Cost:${Cost}M</p>
                        <button onClick={()=>props.eventHandler(props.stadium)} href="/crown" className="btn btn-dark">{crown} Add to Favourite</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;