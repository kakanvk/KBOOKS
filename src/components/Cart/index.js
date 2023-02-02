import MiniBookBox from "./MiniBookBox";
import { DataContext } from "../DataStore";
import { useEffect, useContext } from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();
    const DataStore = useContext(DataContext);

    useEffect(() => {
        if(DataStore.isLogin===false) navigate('/login'); 
        DataStore.setNavSelected(6);
    })

    const deleteCartById = (id) => {
        const newcart = DataStore.cart.filter(item => item.id !== id);
        DataStore.setCart(newcart);
    }

    return (
        <div className="container__content__2">
            <div className="cart__content">
                <div className="title__cart">
                    <h2>Giỏ hàng</h2>
                    <span>{DataStore.cart.length}</span>
                </div>
                <div className="container__book">
                    <div className="container__book__label" >
                        <div className="MiniBookBox__left">
                            <input type="checkbox" />
                            <span>Tác phẩm</span>
                        </div>
                        <div className="MiniBookBox__right">
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <span>Xoá</span>
                        </div>
                    </div>
                    {
                        DataStore.cart.length !== 0 ?
                        DataStore.cart.map((item, index) => {
                            const book = DataStore.getBookById(item.id);
                            return(
                                <MiniBookBox key={index} data={book} deleteCartById={deleteCartById}/>
                            )
                        }) : 
                        <div className="FilterNotFound">
                            <ion-icon name="close-circle"></ion-icon>
                        <span>Chưa có sản phẩm nào trong giỏ hàng.</span>
                    </div>
                    }
                </div>
            </div>
            <div className="cart__pay">
                <div className="cart__pay__left">
                    <span>Đã chọn 3 sản phẩm</span>
                    <div>
                        <input type="checkbox" id="selectAll_checkbox" />
                        <label htmlFor="selectAll_checkbox">Chọn tất cả</label>
                    </div>
                </div>
                <div className="cart__pay__right">
                    <div>
                        <span className="cart__pay__right_s1">Tổng thanh toán:</span>
                        <span className="cart__pay__right_s2">299.000đ</span>
                    </div>
                    <button><span>Đặt hàng</span><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;