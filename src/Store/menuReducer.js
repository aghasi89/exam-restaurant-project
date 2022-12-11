import MenuContent from "../Components/MenuContent";
import MenuItems from "../Components/MenuItems";
import { recipies } from "../datas";
import Menu from "../Pages/Menu/menu";
import { CHANGE_CATEGORY, GET_DATAS } from "./types/menuTypes";


const defaultState = {
    selected: "",
    list: [recipies]
}


export default function menuReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return { ...state, selected: action.payload }
        case GET_DATAS:
            return {...state, list: action.payload}
        default:
            return state            
    }
}

