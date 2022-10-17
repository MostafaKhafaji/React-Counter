import React, { useState } from "react";

import "./Counter.css";
import Button from "../button/Button";
import CounterVal from "./CounterVal";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prev) => ++prev);
  };
  const decreaseCounter = () => {
    setCounter((prev) => --prev);
    if (counter <= 0) {
      alert("reset counter");
      setCounter(0);
    }
  };
  return (
    <div className="counter-wrapper w-100 d-flex justify-centent-center align-items-center">
      <div className="counter mt-5 w-50 m-auto">
        <CounterVal countVal={counter} />
        <div className="buttons">
          <Button clickEv={decreaseCounter} event="-" />
          <Button clickEv={increaseCounter} event="+" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
