import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  const element = useRef();
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalal</p>
    </div>
  );
};

export default App;
