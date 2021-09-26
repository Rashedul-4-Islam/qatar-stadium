import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Stadium from '../Stadium/Stadium';

const Building = () => {
    const [buildings,setBuildings] = useState([]);
    const [cart,setCart] = useState([]);
    const eventHandler = (stadium) =>{
          const newCart = [...cart,stadium]
          setCart(newCart);
        console.log(newCart);
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
                            eventHandler={eventHandler}
                            building={building}
                            ></Stadium>)
                      }
                     </div>
                </div>
                <div className="col-md-3">
                {/* {
                          buildings.map(building => <Calculation building={building}></Calculation>)
                      } */}
                      <Cart
                         cart={cart}
                      ></Cart>

                </div>
            </div>
        </div>
    );
};

export default Building;