import React from "react";
import { useDispatch, useSelector } from "react-redux"
import Actions from "../redux/actions"

const Themes = () => {
    const tema = useSelector(state => state.temaReducer)
    const dispatch = useDispatch()
    //acık tema içerisinde herhangi bir parametre göndermeme gerek yok
    return <div style={tema}>
        <button onClick={() => dispatch(Actions.tema_aksiyon.acik_tema())}>AÇIK TEMA</button>

        <button onClick={() => dispatch(Actions.tema_aksiyon.koyu_tema())} >KOYU TEMA</button>
    </div>;
};

export default Themes;
