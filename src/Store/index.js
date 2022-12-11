import { applyMiddleware, combineReducers, createStore } from "redux";
// import MenuReducer from "./reducers";
import menuReducer from "./menuReducer";
import createSagaMiddleware from "@redux-saga/core";
import { getDatasWatcher, getDatasWorker } from "./sagas/menuItemSaga";




const reducer = combineReducers({
    menu: menuReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(getDatasWorker)


export default store;