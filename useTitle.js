import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading..."); //바뀌는동안 타이틀에 loadinng
  setTimeout(() => titleUpdater("Home"), 5000); // 5초뒤에 타이틀을 Home으로
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
