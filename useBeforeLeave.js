import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useBeforeLeaver = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};

const App = () => {
  const begForLife = () => console.log("Please dont leave"); //마우스 커서위치가 ClientY보다 작을때 실행
  useBeforeLeaver(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
