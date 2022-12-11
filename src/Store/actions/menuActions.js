import { CHANGE_CATEGORY, GET_DATAS } from "../types/menuTypes"



const changeCategoryAction = (category)=>{
    return {
        type:CHANGE_CATEGORY,
        payload: category
    }
}


const getDatasAction = (recipies) => {
    return {
        type: GET_DATAS,
        payload: recipies,
    }
}

export {changeCategoryAction, getDatasAction}