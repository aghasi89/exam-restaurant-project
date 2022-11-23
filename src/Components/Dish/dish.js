
function Dish(props){
    const dishName = props.dishName,
          ingredients = props.ingredients,
          cost = props.cost;


    return(
        <div className="dish">
            <div className="dish-img">
                <img className="dish-img"></img>
            </div>

            <div className="dish-content">
                <div className="dish-name">{dishName}......{cost}</div>
                <div className="ingredients">{ingredients}</div>
            </div>

        </div>
    )
}


export default Dish;