import "./index.css"
import MiniBook from "../MiniBook";
import Counter from "../Counter";

function MiniBookBox(props) {

    const { data, deleteCartById, dataInCart } = props;

    return (
        <div className="MiniBookBox">
            <div className="MiniBookBox__left">
                <input type="checkbox" checked={dataInCart.selected}/>
                <MiniBook miniBookData={data}/>
            </div>
            <div className="MiniBookBox__right">
                <Counter initValue={dataInCart.counter}/>
                <span>{dataInCart.toMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                <div className="MiniBookBox__right--btnDlt" onClick={() => deleteCartById(data.id)}><ion-icon name="trash-outline"></ion-icon></div>
            </div>
        </div>
    )
}

export default MiniBookBox;