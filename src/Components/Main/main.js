
import {Routes , Route } from 'react-router-dom';

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Menu from "../../Pages/Menu";
import Specials from "../../Pages/Specials";
import Events from "../../Pages/Events";
import Chefs from "../../Pages/Chefs";
import Gallery from "../../Pages/Gallery";
import Contact from "../../Pages/Contact"; 
import Layout from '../Layout';

function Main(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About /> } />
                    <Route path="menu" element={<Menu />} />
                    <Route path="specials" element={<Specials />} />
                    <Route path="events" element={<Events />} />
                    <Route path="chefs" element={<Chefs />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="*" element={<Notfound />} /> */}   
                </Route>                 
            </Routes>
            
        </div>
    )
}


export default Main;