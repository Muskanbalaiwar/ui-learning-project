import { useState , useEffect } from "react";
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
    {name : "image 1" ,path :lights},
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 1000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
   <div className="slider-viewport">
    <h1>hello world</h1>
  <div
    className="slider-track"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((item, index) => (
      <div className="slide" key={index}>
        <img src={item.path} alt={item.name} />
      </div>
    ))}
  </div>
</div>

  );
}

export default App;
