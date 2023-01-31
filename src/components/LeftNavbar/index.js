import SelectContainer from "./SelectContainer";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataStore";
import "./style.css"

function LeftNavbar() {

    const dataStore = useContext(DataContext);

    return (
        <div className="leftNavbar">
            <SelectContainer>
                <h1>KHÁM PHÁ</h1>
                {
                    dataStore.navData.map((item, index) => {
                        return (
                            (item.id >= 1 && item.id <=4) ? 
                            <div className={`selectItem ${item.id === dataStore.navSelected ? "active" : ""}`} key={index} onClick={() => dataStore.setNavSelected(item.id)}>
                                <Link to={item.path}>
                                    <ion-icon name={item.iconName}></ion-icon>
                                    <span>{item.content}</span>
                                </Link>
                            </div> : ""
                        )
                    })
                }
            </SelectContainer>
            <SelectContainer>
                <h1>CÁ NHÂN</h1>
                {
                    dataStore.navData.map((item, index) => {
                        return (
                            (item.id >= 5 && item.id <=7) ? 
                            <div className={`selectItem ${item.id === dataStore.navSelected ? "active" : ""}`} key={index} onClick={() => dataStore.setNavSelected(item.id)}>
                                <Link to={item.path}>
                                    <ion-icon name={item.iconName}></ion-icon>
                                    <span>{item.content}</span>
                                </Link>
                            </div> : ""
                        )
                    })
                }
            </SelectContainer>
        </div>


    )
}

export default LeftNavbar;