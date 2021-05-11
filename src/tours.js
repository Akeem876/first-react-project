/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { logDOM } from "@testing-library/dom";
import React, { useState, useEffect } from "react";
// import { url } from "./ReactAppDependencies/travelData";
import Tour from "./tour";
const url = "https://course-api.com/react-tours-project";

const Tours = () => {
 const [loading, setLoading] = useState(true);
 const [tours, setTours] = useState([]);

 const removeItem = (id) => {
  const newTour = tours.filter((tour) => {
   return tour.id !== id;
  });
  setTours(newTour);
 };

 const fetchData = async () => {
  setLoading(true);
  try {
   const response = await fetch(url);
   const tour = await response.json();
   setLoading(false);
   setTours(tour);
   console.log(tour);
  } catch (error) {
   setLoading(false);
   console.log(error);
  }
  //   console.log(tours);
 };

 useEffect(() => {
  fetchData();
 }, []);

 if (loading) {
  return (
   <main>
    <h2>Loading...</h2>
   </main>
  );
 }
 if (tours.length === 0) {
  return (
   <main>
    <h2>No tours left</h2>
    <button onClick={fetchData}>Refresh</button>
   </main>
  );
 }
 return (
  <>
   <Tour to={tours} remove={removeItem} />
  </>
 );
};

export default Tours;
