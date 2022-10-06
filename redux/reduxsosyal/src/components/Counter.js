import React from "react";
import { useDispatch, useSelector } from "react-redux"
import Actions from "../redux/actions";
import countReducer from "../redux/reducers/counterReducers";

const Counter = () => {
    const count = useSelector(state => state.countReducer)
    const dispatch = useDispatch()
    return <>
        <button onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir(1))}>ARTTIR(+)</button>
        <button onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(1))}>AZALT(-)</button>
        <p>{count}</p>
    </>
};

export default Counter;
