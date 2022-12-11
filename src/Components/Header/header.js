import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../Contexts";



function Header(){
    const t= useContext(LanguageContext)
    return(        
        <div className="header">
            <div className="header-container">
                <h1>VENEZIA</h1>
                <nav className="nav-menu">
                    <ul className="nav-ul">
                        <li className="li">
                            <Link to="/">{t.nav.home}</Link>
                        </li>
                        <li className="li">
                            <Link to="/about">{t.nav.about}</Link>
                        </li>
                        <li className="li">
                            <Link to="/menu">{t.nav.menu}</Link>
                        </li>
                        <li className="li">
                            <Link to="/specials">{t.nav.specials}</Link>
                        </li>
                        <li className="li">
                            <Link to="/events">{t.nav.events}</Link>
                        </li>
                        <li className="li">
                            <NavLink to="/chefs">{t.nav.chefs}</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/gallery">{t.nav.gallery}</NavLink>
                        </li>
                        <li className="li">
                            <Link to="/contact">{t.nav.contact}</Link>
                        </li>
                    </ul>
                </nav>           
        
                
            </div>
        </div>
    )
}


export default Header;