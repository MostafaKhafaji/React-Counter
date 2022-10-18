import React from "react";
import { useSelector } from "react-redux";

const CounterVal = () => {
  const counter = useSelector((state) => state.counter.counter);
  return <h1>{counter}</h1>;
};

export default CounterVal;
