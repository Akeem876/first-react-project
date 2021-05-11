/* eslint-disable no-unused-vars */
import React from "react";
import Vacay from "./vacay";
const Tour = ({ to, remove }) => {
 return (
  <section className="mainSector">
   <h2>Tours</h2>
   <div>
    {to.map((tour) => {
     return <Vacay key={tour.id} {...tour} removeItem={remove}></Vacay>;
    })}
   </div>
  </section>
 );
};

export default Tour;
