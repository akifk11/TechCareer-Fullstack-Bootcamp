import React from "react";
import { useDispatch } from "react-redux"
import { loginAction, logoutAction } from "../store/feature/login/LoginSlice";

const LoginComponent = () => {

    const dispatch = useDispatch()

    return (<div>
        <h1>loginComponent</h1>
        <button onClick={() => { dispatch(loginAction({ name: "serif", surname: "aydin" })) }}>Login</button>
        <button onClick={() => { dispatch(logoutAction()) }}>Logout</button>
    </div>);
};

export default LoginComponent;
