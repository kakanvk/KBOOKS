import "./style.css"

function SelectContainer(props){
    return (
        <div className="selectContainer">
            {props.children}
        </div>
    )
}

export default SelectContainer;