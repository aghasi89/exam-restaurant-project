import { useDispatch }  from 'react-redux';
import ButtonMenu from "../../Components/Buttons/buttonMenu";
import MenuContent from "../../Components/MenuContent";
import { changeCategoryAction } from "../../Store/actions/menuActions";
import { useCallback, useContext } from "react";
import { LanguageContext } from "../../Contexts";


function Menu(){   

    const t = useContext(LanguageContext)

    const dispatch = useDispatch()      

    const callback = useCallback( (category)=>{
        return ()=>{
            dispatch(changeCategoryAction(category)) 
        }}, [])

    callback('All')();

    return(
        <section className="menu">
            <div className="menu-container">
                <div className="menu-title">
                    <h2 className="menu-h2">{t.h2.title}<u>----------</u></h2>
                    <p className="p-menu"><b>{t.p.title}</b></p>
                </div>                
                <div className="menu-buttons">                    
                    <ButtonMenu className="btn-ALL" title={t.button.all} onClick={callback("All")} />
                    <ButtonMenu title={t.button.starters}  onClick={callback("starters")} />
                    <ButtonMenu title={t.button.salads} onClick={callback("salads")} />
                    <ButtonMenu title={t.button.specialty}  onClick={callback("specialty")}/>
                </div>
                <MenuContent />
            </div>            
        </section>
    )
}

export default Menu;