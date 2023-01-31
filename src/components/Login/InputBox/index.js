import "./input.css"

function InputBox(props) {
    return (
        <div className="inputBox">
            <label>{props.children}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputBox;