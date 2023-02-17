import MiniBookBox from "./MiniBookBox";
import { Link } from "react-router-dom";
import { DataContext } from "../DataStore";
import { useEffect, useContext } from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const DataStore = useContext(DataContext);

    useEffect(() => {
        if (DataStore.isLogin === false) navigate('/login');
        DataStore.setNavSelected(6);
    })

    const deleteCartById = (id) => {
        const newcart = DataStore.cart.filter(item => item.id !== id);
        DataStore.setCart(newcart);
    }

    const handleChageSelectAll = () => {
        DataStore.handleChageSelect();
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
                            <input type="checkbox" checked={DataStore.selectedAll} onChange={() => handleChageSelectAll()}/>
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
                                return (
                                    <MiniBookBox key={item.id} data={book} deleteCartById={deleteCartById} dataInCart={item} />
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
                    <span>Đã chọn {DataStore.getSelectedFromCart()} sản phẩm</span>
                    <div >
                        <input type="checkbox" id="selectAll_checkbox"
                            checked={DataStore.selectedAll}
                            onChange={() => handleChageSelectAll()}
                        />
                        <label htmlFor="selectAll_checkbox">Chọn tất cả</label>
                    </div>
                </div>
                <div className="cart__pay__right">
                    <div>
                        <span className="cart__pay__right_s1">Tổng đơn hàng:</span>
                        <span className="cart__pay__right_s2">{DataStore.getPayFromCart().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                    </div>
                    <Link to="complete-order"><span>Đặt hàng</span><ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;