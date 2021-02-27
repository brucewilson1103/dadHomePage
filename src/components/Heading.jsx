import React from "react";

function Heading() {
  let greeting;
  const date = new Date();
  const currentTime = date.getHours();

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning Willy";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon Willy";
    customStyle.color = "green";
  } else {
    greeting = "Good Night Willy";
    customStyle.color = "black";
  }
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
      <h2 className="head compback"> </h2>
    </div>
  );
}

export default Heading;
