import Button from "../../Button";
import { Link } from "react-router-dom";
import avt from "../../../asset/imgs/kaka.jpg"
import "./style.css"
import { useContext, useState } from "react";
import { DataContext } from "../../DataStore";

function Option() {

    const DataStore = useContext(DataContext);

    const [activePopup, setActivePopup] = useState(false);

    const style = {
        display: activePopup ? "flex" : "none"
    }

    const linkStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "35px",
        padding: "0 0px 0 8px",
        color: "black",
        textDecoration: "none"
    }

    const divStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "10px",
        fontWeight: "500"
    }

    const handleLogout = () => {
        DataStore.setIsLogin(false);
    }

    return (
        DataStore.isLogin ?
            <div className="user__box" >
                <div className="user__box__btn" onClick={() => setActivePopup(!activePopup)}>
                    <ion-icon name="person"></ion-icon>
                    <span>Ka Ka</span>
                    <ion-icon name="caret-down"></ion-icon>
                </div>
                <div style={style}>
                    <span className="user__box__option__overplay" onClick={() => setActivePopup(!activePopup)}></span>
                    <div className="user__box__option">
                        <div className="user__box__option__avt">
                            <img src={avt} alt="" />
                            <span>Ka Ka</span>
                        </div>
                        <div className="user__box__option__link">
                            <div style={linkStyle}>
                                <div style={divStyle}><ion-icon name="moon"></ion-icon>Chế độ tối</div>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                            <Link style={linkStyle} to="/info">
                                <div style={divStyle}><ion-icon name="person"></ion-icon>Thông tin</div>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </Link>
                            <Link style={linkStyle} to="/order">
                                <div style={divStyle}><ion-icon name="pricetag"></ion-icon>Đơn hàng</div>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </Link>
                        </div>
                        <div className="user__box__option__logout"><Button onClick={handleLogout}>Đăng xuất</Button></div>
                    </div>
                </div>
            </div> 
        :   <div className="option__login">
                <Button to="login">Đăng nhập</Button>
                <Button to="register" type="fill">Đăng kí</Button>
            </div>
    )
}

export default Option;