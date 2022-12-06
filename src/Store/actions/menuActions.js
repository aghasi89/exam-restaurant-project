import { CHANGE_CATEGORY } from "../types/menuTypes"

const changeCategoryAction = (category)=>{
    return {
        type:CHANGE_CATEGORY,
        payload: category
    }
}

export {changeCategoryAction}