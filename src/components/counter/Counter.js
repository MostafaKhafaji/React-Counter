import "./Counter.css";
import Button from "../button/Button";
import CounterVal from "./CounterVal";
import { useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const increaseCounter = () => {
    dispatch(incrementCounter());
  };
  const decreaseCounter = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="counter-wrapper w-100 d-flex justify-centent-center align-items-center">
      <div className="counter mt-5 w-50 m-auto">
        <CounterVal />
        <div className="buttons">
          <Button clickEv={decreaseCounter} event="-" />
          <Button clickEv={increaseCounter} event="+" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
