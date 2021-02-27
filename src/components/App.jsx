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

  function workcheck() {
    window.open(
      " https://www.paycomonline.net/v4/ee/web.php/app/login",
      "_blank"
    );
  }

  return (
    <div className="container">
      <Heading />
      <h1>{time}</h1>

      <button onClick={facebook}>Facebook</button>
      <button onClick={rahs}>Ridgway High</button>
      <button onClick={amazon}>Amazon</button>
      <button onClick={workcheck}>Nancy's Work</button>

      <h3>What did you need today?</h3>
    </div>
  );
}

export default App;
