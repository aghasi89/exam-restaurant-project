import MenuItems from "../../Components/MenuItems";
import {Provider}  from 'react-redux';
import ButtonMenu from "../../Components/Buttons/buttonMenu";
import MenuContent from "../../Components/MenuContent";


function Menu(){
    // const itemName = ['lobster Bisque', 'Bred Barrel' ]

    return(
        <section className="menu">
            <div className="menu-container">
                <div className="menu-title">
                    <h2 className="menu-h2">MENU <u>----------</u></h2>
                    <p className="p-menu"><b>Check Our Tasty Menu</b></p>
                </div>
                
                <div className="menu-buttons">                    
                    <ButtonMenu className="btn-ALL" title='All'/>
                    <ButtonMenu title='Starters'/>
                    <ButtonMenu title='Salads'/>
                    <ButtonMenu title='Specialty'/>
                </div>
                <MenuContent />
            </div>
            
        </section>
    )
}

export default Menu;