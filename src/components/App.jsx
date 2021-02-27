import React, { useState } from "react";
import Heading from "./Heading";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function facebook() {
    window.open("https://www.facebook.com", "_blank");
  }

  function rahs() {
    window.open(" https://rasd.us/", "_blank");
  }

  function amazon() {
    window.open(" https://www.amazon.com", "_blank");
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <Heading />
      <h3>What did you need today?</h3>

      <button onClick={facebook}>Facebook</button>
      <button onClick={rahs}>Ridgway High</button>
      <button onClick={amazon}>Amazon</button>
    </div>
  );
}

export default App;
