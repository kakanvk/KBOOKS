import { useContext } from "react";
import { DataContext } from "../DataStore";
import { Link } from "react-router-dom";
import "./index.css"
import PathBox from "../BookDetail/PathBox";
import Invoice from "./Invoice";
import Voucher from "./Voucher";
import Transport from "./Transport";
import PaymentMethod from "./PaymentMethod";
import OrderDetail from "./OrderDetail";
import PhoneNumber from "./PhoneNumber";

function CompleteOrder() {

    const DataStore = useContext(DataContext);

    return (
        <div className="container__content__2">
            <div className="cart__content">
                <PathBox parentPath="/cart" parentValue="Giỏ hàng" childValue="Hoàn tất đặt hàng"/>
                <div className="compleOrder__content">
                    <div className="compleOrder__content__left">
                        <div>
                            <h2 className="compleOrder__content__label">
                                Chi tiết đơn hàng
                            </h2>
                            <OrderDetail/>
                        </div>
                        <div>
                            <div className="compleOrder__content__label">
                                <h2 >Địa chỉ giao hàng</h2>
                                <button className="compleOrder__changeTransport">Thay đổi</button>
                            </div>
                            <div className="TransportBox">
                                <Transport/>
                                <PhoneNumber/>
                            </div>
                        </div>
                        <div>
                            <h2 className="compleOrder__content__label">
                                Phương thức thanh toán
                            </h2>
                            <PaymentMethod/>
                        </div>
                    </div>
                    <div className="compleOrder__content__right">
                        <div>
                            <h2 className="compleOrder__content__label">Hoá đơn</h2>
                            <Invoice/>
                        </div>
                        <div>
                            <h2 className="compleOrder__content__label">Voucher</h2>
                            <Voucher/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart__pay">
                <div className="cart__pay__left">
                    <span>Tổng cộng {DataStore.getSelectedFromCart()} sản phẩm</span>
                </div>
                <div className="cart__pay__right">
                    <div>
                        <span className="cart__pay__right_s1">Tổng thanh toán:</span>
                        <span className="cart__pay__right_s2">{(DataStore.getPayFromCart() + 30000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                    </div>
                    <Link><span>Đặt hàng</span><ion-icon name="checkmark-circle"></ion-icon></Link>
                </div>
            </div>
        </div>
    )
}

export default CompleteOrder;
