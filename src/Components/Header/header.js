import { useContext } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../Contexts";
import Topbar from "../Topbar";


function Header(){
    const t= useContext(LanguageContext)
    return(

        // const headerItem = [
        //     {home: Home, }
        // ]


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
                            <Link to="/specials">Specials</Link>
                        </li>
                        <li className="li">
                            <Link to="/events">Events</Link>
                        </li>
                        <li className="li">
                            <NavLink to="/chefs">Chefs</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="li">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>           
        
                
            </div>
        </div>
    )
}


export default Header;