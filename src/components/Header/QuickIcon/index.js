import { Link } from "react-router-dom";
import "./style.css"

function QuickIcon(props) {
    return (
        <div className="quickIcon">
            <Link to="/like"><ion-icon name="heart-outline"></ion-icon></Link>
            <Link to="/cart"><ion-icon name="bag-outline"></ion-icon></Link>
        </div>
    )
}

export default QuickIcon;