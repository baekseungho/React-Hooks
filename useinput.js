import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const max = (value) => !value.includes("@"); //input에서 @입력시 막음
  const maxLen = (value) => value.length < 10; // 글자수가 10개와 같거나 크면 막음

  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>이건무</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
