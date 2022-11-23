import { Routes, Route, Link, NavLink } from "react-router-dom";
import Topbar from "../Topbar";


function Header(){
    return(
        <div className="header">
            <div className="header-container">
                <h1>VENEZIA</h1>
                <nav className="nav-menu">
                    <ul className="nav-ul">
                        <li className="li">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="li">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="li">
                            <Link to="/menu">Menu</Link>
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