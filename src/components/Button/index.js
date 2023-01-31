import "./style.css"
import { Link } from "react-router-dom";
var classNames = require('classnames');

function Button(props) {
    const btnClass = classNames('btn', {"btn-fill" : props.type});

    const linkStyle = {
        color: props.type ? "white" : "black" ,
        textDecoration: "none",
        padding: "6px 25px",
        width: "100%"
    }

    return (
        <button className={btnClass}>
            <Link to={props.to} style={linkStyle} onClick={props.onClick}>
                    {props.children}
            </Link>
        </button>
    )

}

export default Button;