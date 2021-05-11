import React, { useState } from "react";
const Vacay = ({ id, name, info, image, price, removeItem }) => {
 const [reading, setReading] = useState(true);
 return (
  <div className="tours">
   <img src={image} alt={name} srcset="" />
   <div className="desc">
    <div className="header">
     <h3>{name}</h3> <h4>${price}.00</h4>
    </div>
    <div className="info">
     <p>{!reading ? info : `${info.substr(0, 100)}...`}</p>
     <button
      className="info-btn"
      onClick={() => {
       return setReading(!reading);
      }}
     >
      {reading ? "see more" : "show less"}
     </button>
    </div>
    <button onClick={() => removeItem(id)}>Remove</button>
   </div>
  </div>
 );
};

export default Vacay;
