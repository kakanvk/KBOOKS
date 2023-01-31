import Button from "../../Button";
import MiniBook from "../../Cart/MiniBook";
import "./index.css"

function LikeBox(props) {

    const { data, handleDelete, handleAddToCart, isInCart } = props;

    const handleAdd = (id) => {
        handleAddToCart(id);
    }

    const buttonT = isInCart ? (
        <div className="success">
            <ion-icon name="checkmark-circle"></ion-icon>
            <span>Đã thêm vào giỏ hàng</span>
        </div>
    ) : (
        <Button onClick={() => handleAdd(data.id)}><ion-icon name="add-outline"></ion-icon>Thêm vào giỏ hàng</Button>
    )
    
    return (
        <div className="likebox">
            <MiniBook miniBookData={data}/>
            <div className="likebox__right">
                <div>
                    {buttonT}
                </div>
                <div className="likebox__right__btnDlt" onClick={() => handleDelete(data.id)}>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default LikeBox;