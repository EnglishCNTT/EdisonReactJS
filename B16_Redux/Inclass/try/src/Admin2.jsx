import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase } from "./store/counter";
import { decrease } from "./store/counter";

export default function Admin() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const onDecrease = () => {
    dispatch(decrease(10));
  };
  const onIncrease = () => {
    dispatch(increase(10));
  };
  return (
    <div>
        <span>{counter}</span>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
    </div>
  );
}
