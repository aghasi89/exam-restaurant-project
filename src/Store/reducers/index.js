import MenuItems from "../../Components/MenuItems";
import Menu from "../../Pages/Menu/menu";


// const defaultState = [
//     <MenuItems type ="starters" itemName="lobster" ingredients="vorosh baner" itemCost="5" />,
//     <MenuItems type ="salad" itemName="caeser" ingredients="vorosh cezari baner" itemCost="6" />
// ]


const defaultState = {
    itemName: "lobster",
    
}

export default function MenuReducer(state = defaultState, action){
    switch(action.type){
        case "avelacnelItem":
            return {...state, itemName: state.itemName + action.payload} ;
        case "grelOK":
            return {...state, itemName: state.itemName + action.payload};
        default:
            return state
    }
}