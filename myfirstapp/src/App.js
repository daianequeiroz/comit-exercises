import React from "react";
import "./App.css";

const App = () => {
  const people = [
    { name: "Daiane, age:36, city:Winnipeg" },
    { name: "Rodrigo, age:45, city:Winnipeg" },
    { name: "Diogo, age:37, city:Vancouver" }];

return (
  <div className="App">
     {people.map(person => (
         <div>
           <div>Name: {person.name}</div>
           <div>Age: {person.age}</div>
           <div>City: {person.city}</div>
       ))}
  </div>
  );
}