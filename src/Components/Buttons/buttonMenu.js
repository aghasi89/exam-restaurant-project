import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

export default function ButtonMenu(props){
    return(
        <div>
            <button className={props.className}>{props.title}</button>
        </div>
    )
}