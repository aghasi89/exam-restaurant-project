import { useContext } from "react";
import { LanguageContext } from "../../Contexts";
import Languages from "../../Contexts/Languages";

function Topbar(props){
const {changeLanguage} = props

    return (
        <div>
            <div className="topbar-container">
                <div className="topbar-contact">
                    <div className="topbar-contact-info">+1 5589 55488 55</div>
                    <div className="topbar-contact-info">Mon-Sat: 11AM - 23PM</div>  
                </div>
                <div className="topbar-language">
                    <button onClick={ () => {
                        changeLanguage(Languages.en)
                    } } >En</button>
                    <button onClick={ () => {
                        changeLanguage(Languages.ru)
                    } } >RU</button>
                </div>
            </div>
        </div>
    )
}

export default Topbar;