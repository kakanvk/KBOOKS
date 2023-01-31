import Icon from "../../../asset/imgs/Icon.png"
import TextLogo from "../../../asset/imgs/TextIcon.png"
import "./index.css"

function Logo(){
    return (
            <div className="header__logo">
                <img src={Icon} alt="logo" className="logoIcon"/>
                <img src={TextLogo} alt="KBOOKS" className="logoText"/> 
            </div>
    )
}

export default Logo;