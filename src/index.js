import React from "react";
import ReactDOM from "react-dom";

const name = "Deepak";
const no = 7;

ReactDOM.render(
  <div>
  <h1>Hello {name} </h1>
  <p>Your lucky number is {Math.floor(Math.random()*10)}</p>
  </div>,

  document.getElementById("root")
   );
