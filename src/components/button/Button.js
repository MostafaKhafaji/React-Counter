import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button onClick={props.clickEv}>{props.event}</button>;
};

export default Button;
