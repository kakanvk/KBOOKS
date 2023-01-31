import { useState } from "react"
import "./combobox.css"

function Combobox (props) {
    const {children, dataSource, handleChange} = props

    const [activeCbb, setActiveCbb] = useState(false);

    const [selected, setSelected] = useState(props.selected);

    const handleClick = () => {
        setActiveCbb(!activeCbb);
    }

    const handleSelect = (item) => {
        setSelected(item);
        handleChange(item);
        setActiveCbb(!activeCbb);
    }

    const style = {
        display: activeCbb? "block" : "none",
        width: "100%"
    }

    return (
        <div className="cbb">
            <label>{children}</label>
            <div className="cbb__input" onClick={handleClick}>
                <span>{selected}</span>
                <ion-icon name="caret-down"></ion-icon>
            </div>
            <div className="cbb__option" style={style}>
                <span className="cbb__option__overplay" onClick={handleClick}></span>
                <div>
                    {dataSource.map((item) => {
                        return (
                            <li key={item} onClick={() => handleSelect(item)}>{item}</li>
                        )
                    })}
                </div>             
            </div>
        </div>
    )
}

export default Combobox;