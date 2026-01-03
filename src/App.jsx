import { useState } from "react";
import "./App.css";
import forest from "./assets/img_forest.jpg"
import lights from "./assets/img_lights.jpg"
import mountains from "./assets/img_mountains.jpg"
import snowtops from "./assets/img_snowtops.jpg"

const slides = [
  {name : "image 1" ,path :forest},
  {name : "image 1" ,path :lights},
  {name : "image 1" ,path :mountains},
  {name : "image 1" ,path :snowtops},
];

function App() {
  return (
    <div className="slider-main">
   <div className="slider-parent">
    {slides && slides.length>0 && slides.map((item,index)=>{
      return(
        <div className="slider-container" key={index}>
          <img src={item.path} alt={item.name} className="img"/>
        </div>
      )
    })}
   </div></div>
  );
}

export default App;
