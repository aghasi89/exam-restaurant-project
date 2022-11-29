import { createStore } from "redux";
import MenuReducer from "./reducers";




const store = createStore(MenuReducer);

export default store;