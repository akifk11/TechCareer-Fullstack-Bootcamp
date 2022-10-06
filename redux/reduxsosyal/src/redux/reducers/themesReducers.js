import ActionTypes from "../actionTypes";

const initialState = { backgroundColor: "red", height: "300px", width: "100%" }
const lighttema = { backgroundColor: "white", height: "300px", width: "100%" }
const darktema = { backgroundColor: "black", height: "300px", width: "100%" }
const temaReducer = (state = initialState, action) => {
    //returnde action.payload gönderirsek Themes.js te dispatch içerisinde parametre göndermemiz lazım
    switch (action.type) {
        case ActionTypes.tema.ACIK_TEMA:
            return lighttema;
        case ActionTypes.tema.KOYU_TEMA:
            return darktema;
        default:
            return state;
    }
}

export default temaReducer