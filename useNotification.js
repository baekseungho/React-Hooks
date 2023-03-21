import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("이건우 그는신인가?", {
    body: "이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!이건우!",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>행복버튼</button>
    </div>
  );
};

export default App;
