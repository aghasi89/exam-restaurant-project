import MenuContent from "../../Components/MenuContent"



function selectItems(state) {
        return state.menu.list
}
function selectSelected(state) {
    return state.menu.selected
}
export  {selectItems,selectSelected}