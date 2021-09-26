import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Stadium from '../Stadium/Stadium';

const Building = () => {
    const [buildings,setBuildings] = useState([]);
    const [cart,setCart] = useState([]);
    const eventHandler = (stadium) =>{
          const newCart = [...cart,stadium]
          setCart(newCart);
    }
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setBuildings(data))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                     <div className="row">
                     {
                          buildings.map(building => <Stadium
                            key ={building.id}
                            eventHandler={eventHandler}
                            building={building}
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

export default Building;