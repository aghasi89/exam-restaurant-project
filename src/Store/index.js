import { combineReducers, createStore } from "redux";
// import MenuReducer from "./reducers";
import menuReducer from "./menuReducer";



const reducer =  combineReducers({
    menu:menuReducer
})

const store = createStore(reducer);

export default store;