import Counter from "../../Cart/Counter";
import { Link } from "react-router-dom";
import Button from "../../Button"
import "./index.css"
import StarRate from "../../StarRate";
import { useContext } from "react";
import { DataContext } from "../../DataStore";

function MainBox(props) {

    const book = props.data

    const DataStore = useContext(DataContext);

    const handleAddToCart = (id) => {
        const newCart = [
            {
                id,
                counter: 1
            },
            ...DataStore.cart
        ]

        DataStore.setCart(Array.from(new Set(newCart)));
    }

    const handleAddTolikeList = (id) => {

        const newLikeList = !DataStore.isInLikeList(id) ?
            [
                id,
                ...DataStore.likeList
            ] : DataStore.likeList.filter(item => item !== id);

        DataStore.setLikeList(Array.from(new Set(newLikeList)));
    }

    return (
        <div className="BookDetail__mainBox">
            <div className="BookDetail__mainBox__left">
                <img src={book.linkBookCover} alt="" />
            </div>
            <div className="BookDetail__mainBox__right">
                <div className="mainBox__right__info">
                    <Link to={`/author/${book.authorName}`}>{book.authorName}</Link>
                    <span>{book.bookName}</span>
                </div>
                <StarRate number={book.star} />
                <div className="mainBox__right__price">
                    <span>{book.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                    <span>{book.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                </div>
                <div className="mainBox__right__count">
                    <span>Số lượng:</span>
                    <Counter />
                </div>
                <div className="mainBox__right__btn">
                    <Button onClick={() => handleAddToCart(book.id)}><ion-icon name="add"></ion-icon>Giỏ hàng</Button>
                    <Button type="btn-fill">Mua ngay</Button>
                </div>
            </div>
            <div className={`BookDetail__mainBox__likeButton ${DataStore.isInLikeList(book.id) ? "BookDetail__mainBox__likeButton__active" : ""}`}
                onClick={() => handleAddTolikeList(book.id)}
            >
                {DataStore.isInLikeList(book.id) ?
                    <ion-icon name="heart"></ion-icon> :
                    <ion-icon name="heart-outline"></ion-icon>
                }
            </div>
        </div>
    )
}

export default MainBox;