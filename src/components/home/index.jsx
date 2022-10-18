import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <>
      <div className="my-5">
        <h1>
          Counter is <span className="text-danger">{counter}</span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Home;
