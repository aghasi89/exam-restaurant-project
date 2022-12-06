import MenuContent from "../Components/MenuContent";
import MenuItems from "../Components/MenuItems";
import Menu from "../Pages/Menu/menu";
import { CHANGE_CATEGORY } from "./types/menuTypes";


const defaultState = {
    selected: "",
    list: []
}



export default function menuReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return { ...state, selected: action.payload }
        case "showStarters":
            return {};
        case "showSalads":
            return {};
        case "showSpecialty":
            return {};
        default:
            return state
    }
}

