import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Stadium from '../Stadium/Stadium';

const Stadiums = () => {
    const [stadiums,setStadiums] = useState([]);
    const [cart,setCart] = useState([]);
    const eventHandler = (stadium) =>{
          const newCart = [...cart,stadium]
          setCart(newCart);
    }
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setStadiums(data))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                     <div className="row">
                     {
                          stadiums.map(stadium => <Stadium
                            key ={stadium.id}
                            eventHandler={eventHandler}
                            stadium={stadium}
                            ></Stadium>)
                      }
                     </div>
                </div>
                <div className="col-md-3">
                      <Cart
                         cart={cart}
                      ></Cart>

                </div>
            </div>
        </div>
    );
};

export default Stadiums;