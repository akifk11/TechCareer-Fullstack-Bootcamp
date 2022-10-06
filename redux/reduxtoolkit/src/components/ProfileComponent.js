import React from "react";
import { useSelector } from "react-redux";
import { loginReducer } from "../store/feature/login/LoginSlice";

const ProfileComponent = () => {

    const user = useSelector((state) => state.loginReducer.value)
    const theme = useSelector((state) => state.themeReducer.value)

    return <div style={{ color: theme }}>
        <h1>ProfileComponent</h1>
        <p>Name:{user.name}</p>
        <p>Surname:{user.surname}</p>
    </div>;
};

export default ProfileComponent;
