import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

export default function ButtonMenu(props){
    return(
        <div>
            <button onChange={props.onChange} onClick={props.onClick} className="menu-button">{props.title}</button>
        </div>
    )
}