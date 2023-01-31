import { Link } from "react-router-dom";
import "./index.css"

function PathBox(props) {

    const { parentPath, parentValue, childValue} = props;
    return (
        <div className="PathBox">
            <Link to={parentPath}>{parentValue}</Link>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <Link>{childValue}</Link>
        </div>      
    )
}

export default PathBox;