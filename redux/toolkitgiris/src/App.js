import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, increamentByAmount } from "./counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(increament());
  };
  const handleDecreament = () => {
    dispatch(decreament());
  };
  const handleIncreamentByAmount = () => {
    dispatch(increamentByAmount(5));
  };
  return (
    <div>
      <h1>your count:{count}</h1>
      <button onClick={handleIncreament}>increament +</button>
      <button onClick={handleDecreament}>decreament -</button>
      <button onClick={handleIncreamentByAmount}>increament +5</button>
    </div>
  );
};

export default App;
