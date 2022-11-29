import { useState } from "react";
import MenuItems from "../MenuItems";

function MenuContent(){

    // const [items, setItems] = useState([])

   const [items, setItems] = useState([        
        {id: 1, img: '', itemName: 'Lobster Bisque', itemCost: '5$', ingredients: ' Lorem, deren, trataro, filede, nerada'},
        {id: 2, img: '', itemName: 'Crab Cake', itemCost: '5$', ingredients: ''},
        {id: 3, img: '', itemName: 'Tuscan Grilled', itemCost: '5$', ingredients: ''},
        {id: 4, img: '', itemName: 'Greek Salad', itemCost: '5$', ingredients: ''},
        {id: 5, img: '', itemName: 'Lobster roll', itemCost: '5$', ingredients: ''},
        {id: 6, img: '', itemName: 'Bread Barrel', itemCost: '5$', ingredients: ''},
        {id: 7, img: '', itemName: 'Caesar Selections', itemCost: '5$', ingredients: ''},
        {id: 8, img: '', itemName: 'Mozzarella Stick', itemCost: '5$', ingredients: ''},
        {id: 9, img: '', itemName: 'Spinach ', itemCost: '5$', ingredients: ''}
    ])
    
    

    return(
       
        // console.log(items.id),   item.id
        <div className="menu-content">
            {items.map( (item) => {
                return (
                    item.id,
                    <MenuItems itemName={item.itemName} itemCost={item.cost} ingredients={item.ingredients} key={item.id}/>
                )
            }                      
            
            )}
            
            
        </div>

        
        
    )
}

export default MenuContent;