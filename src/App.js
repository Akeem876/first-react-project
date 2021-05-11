import "./App.css";
import data from "./ReactAppDependencies/data";
import { useState, useEffect } from "react";
import GetUsers from "./ReactAppDependencies/users";

function App() {
 let counter = 0;
 const [people, setPeople] = useState(data);
 let [count, setCount] = useState(counter);
 useEffect(() => {
  if (count > 1) {
   console.log(count);
   document.title = `New Messages (${count})`;
  }
 });
 return (
  <>
   <h2 className="title">React Project</h2>
   <article className="mainContainer">
    <div className="counter">
     <h2>{count}</h2>
     <button
      className="btn"
      onClick={() => {
       setCount((counter) => counter - 1);
      }}
     >
      -
     </button>
     <button
      className="btn"
      onClick={() => {
       setCount(0);
      }}
     >
      reset
     </button>
     <button
      className="btn"
      onClick={() => {
       setCount(count + 1);
      }}
     >
      +
     </button>
    </div>

    <main>
     <article className="peopleContainer">
      <h3>{people.length} persons are here</h3>
      <section>
       {people.map((person) => {
        const { id, name, age, position } = person;
        return (
         <div key={id} className="people">
          <h4>{name}</h4>
          <p>{position}</p>
          <p>{age}</p>
         </div>
        );
       })}
      </section>
     </article>
     <button
      onClick={() => {
       setPeople([]);
      }}
     >
      Clear All
     </button>
    </main>
   </article>
   <div className="newContainer">
    <GetUsers />
   </div>
  </>
 );
}

export default App;
