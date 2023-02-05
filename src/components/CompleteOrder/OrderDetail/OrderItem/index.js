import { useContext } from "react";
import { DataContext } from "../../../DataStore";
import "./index.css"

function OrderItem (props) {

    const DataStore = useContext(DataContext);

    const { data } = props;

    const book = DataStore.getBookById(data.id);
 
    return (
        <div className="OrderDetailItem">
            <div className="OrderDetailItem__left">
                <div className="OrderDetailItem__img">
                    <img src={book.linkBookCover} alt=""/>
                </div>
                <div className="OrderDetailItem__name">
                    <h3>{book.bookName}</h3>
                    <span>{book.authorName}</span>
                </div>
            </div>
            <div className="OrderDetailItem__right">
                <span>x{data.counter}</span>
                <span>{book.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
            </div>
        </div>
    )
}

export default OrderItem;