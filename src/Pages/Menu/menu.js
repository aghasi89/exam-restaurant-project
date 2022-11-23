import Dish from "../../Components/Dish";

function Menu(){
    return(
        <section className="menu">
            <div className="menu-container">
                <div className="menu-title">
                    <h2 className="menu-h2">MENU <u>-------     </u>  </h2>
                    <p className="p-menu"><b>Check Our Tasty Menu</b></p>
                </div>

                <div className="menu-li">
                    <ul className="menu-ul">
                        <li className="menu-li">All</li>
                        <li className="menu-li">Starters</li>
                        <li className="menu-li">Salads</li>
                        <li className="menu-li">Specialty</li>
                    </ul>
                </div>
            </div>

            <div className="menu-content">
                <Dish  />
            </div>
        </section>
    )
}

export default Menu;