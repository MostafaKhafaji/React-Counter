import React, { useState } from "react";

import "./Counter.css";
import Button from "../button/Button";
import CounterVal from "./CounterVal";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prev) => ++prev);
    if (counter === 10) {
      alert("reset counter");
      setCounter(0);
    }
  };
  const decreaseCounter = () => {
    setCounter((prev) => --prev);
    if (counter === -10) {
      alert("reset counter");
      setCounter(0);
    }
  };
  return (
    <div className="counter-wrapper">
      <CounterVal countVal={counter} />
      <div className="buttons">
        <Button clickEv={increaseCounter} event="+" />
        <Button clickEv={decreaseCounter} event="-" />
      </div>
    </div>
  );
};

export default Counter;
