import LikeBox from "./LikeBox";
import "./index.css"
import { DataContext } from "../DataStore";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Like() {

    const navigate = useNavigate()
    const DataStore = useContext(DataContext);

    useEffect(() => {
        if(DataStore.isLogin===false) navigate('/login'); 
        DataStore.setNavSelected(5);
    })

    const deleteLikeListById = (id) => {
        const newLikeList = DataStore.likeList.filter(item => item !== id);
        DataStore.setLikeList(newLikeList);
    }

    const handleAddToCart = (id) => {

        const book = DataStore.getBookById(id);
        
        const checkBookInCart = DataStore.isInCart(id);
        if(checkBookInCart===false) 
        {
            
            const newCart = [
                {
                    id,
                    counter: 1,
                    toMoney: book.newPrice,
                    selected: false
                },
                ...DataStore.cart
            ]

            DataStore.setCart(Array.from(new Set(newCart)));
        } else {
            const cartWithoutThisBook = DataStore.cart.filter(item => item.id !== id);

            const newCart = [
                {
                    id,
                    counter: checkBookInCart + 1,
                    toMoney: book.newPrice * (checkBookInCart + 1),
                    selected: false
                },
                ...cartWithoutThisBook
            ]

            DataStore.setCart(Array.from(new Set(newCart)));
        }
    }

    return (
        <div className="container__content">
            <h2>Tác phẩm yêu thích</h2>
            <div className="likebox_container">
                <div className="container__book__label" >
                    <div className="MiniBookBox__left">
                        <span>Tác phẩm</span>
                    </div>
                    <div className="MiniBookBox__right">
                        <span>Tuỳ chọn</span>
                        <span>Bỏ thích</span>
                    </div>
                </div>
                {
                    DataStore.likeList.length !== 0 ?
                    DataStore.likeList.map((bookId, index) => {
                        const book = DataStore.getBookById(bookId);
                        return(
                            <LikeBox key={index} data={book} handleDelete={deleteLikeListById} handleAddToCart={handleAddToCart} isInCart={DataStore.isInCart(bookId)}/>
                        )
                    }) : 
                    <div className="FilterNotFound">
                        <ion-icon name="close-circle"></ion-icon>
                        <span>Chưa có sản phẩm nào trong danh sách yêu thích.</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Like;