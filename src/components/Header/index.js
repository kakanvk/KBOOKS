import Logo from "./Logo";
import Option from "./Option";
import "./index.css"
import QuickIcon from "./QuickIcon";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <Logo />
                <SearchBox />
            </div>
            <div className="header__right">
                <QuickIcon />
                <Option />
            </div>

        </header>
    )
}

export default Header;