import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../Store/selectors";
import { selectSelected } from "../../Store/selectors/saladsSelector";
import MenuItems from "../MenuItems";


function MenuContent(){
    

    
    const items = useSelector(selectItems)
    const selected= useSelector(selectSelected)
    
    const list = useMemo(()=>{
        if(selected==="All"  || selected ===""){
            return items
        }else{
            return items.filter((i=>i.category===selected))
        }
        
    },[selected])

    // const salads = items.filter( (item) => item.category == "salad" )
    // const starters = items.filter( (item) => item.category == "starters" )
    // const specialty = items.filter( (item) => item.category == "specialty" )


    return(       
        // console.log(items.id),   

        <div className="menu-content">
            {list.map( (item) => {
                return (                    
                    <MenuItems  src={item.img} itemName={item.itemName} itemCost={item.itemCost} ingredients={item.ingredients} key={item.id}/>
                )
            }                    
            )}           
        </div>        
    )
}
export default MenuContent;