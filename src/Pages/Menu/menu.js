import MenuItems from "../../Components/MenuItems";
import {Provider, useDispatch}  from 'react-redux';
import ButtonMenu from "../../Components/Buttons/buttonMenu";
import MenuContent from "../../Components/MenuContent";
import {useSelector} from 'react-redux';
import saladsSelector from "../../Store/selectors";
import { changeCategoryAction } from "../../Store/actions/menuActions";





function Menu(){   

    const dispatch = useDispatch()
    // const dispatch = useDispatch()
    // const showSalads = useSelector(items => items.filter( (item) => item.category == "salads" ))
   // const showSalads = useSelector(saladsSelector)
    const callback = (category)=>{
        return ()=>{
            dispatch(changeCategoryAction(category))
        }
    }
    return(
        <section className="menu">
            <div className="menu-container">
                <div className="menu-title">
                    <h2 className="menu-h2">MENU <u>----------</u></h2>
                    <p className="p-menu"><b>Check Our Tasty Menu</b></p>
                </div>
                
                <div className="menu-buttons">                    
                    <ButtonMenu className="btn-ALL" title='All' onClick={callback("All")} />
                    <ButtonMenu title='Starters'  onClick={callback("starters")}/>
                    <ButtonMenu title='Salads' onClick={callback("salads")} />
                    <ButtonMenu title='Specialty'  onClick={callback("specialty")}/>
                </div>
                <MenuContent />
            </div>
            
        </section>
    )
}

export default Menu;