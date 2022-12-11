
function MenuItems(props){
      
    return(
        <div className="menu-item">
            <div className="menu-item-img-box">                
                <img className="menu-item-img" src={props.src}>{props.img}</img>                
            </div>

            <div className="menu-item-text">
                <div className="item-name">{props.itemName}......{props.itemCost}</div>
                <div className="ingredients">{props.ingredients}</div>
            </div>
        </div>
    )
}


export default MenuItems;