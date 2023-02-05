import { useContext } from "react";
import { DataContext } from "../../DataStore";
import "./index.css"

function Invoice () {

    const DataStore = useContext(DataContext);

    return (
        <div className="Invoice">
            <div className="Invoice--top">
                <div className="Invoice__item">
                    <h3>Tổng đơn hàng</h3>
                    <span>{DataStore.getPayFromCart().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                </div>
                <div className="Invoice__item">
                    <h3>Phí vận chuyển</h3>
                    <span>30.000đ</span>
                </div>
                <div className="Invoice__item">
                    <h3>Voucher</h3>
                    <span>- 0đ</span>
                </div>
            </div>
            <div className="Invoice--bottom">
                <div className="Invoice__item">
                    <h3>Tổng thanh toán</h3>
                    <span>{(DataStore.getPayFromCart() + 30000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                </div>
            </div>
        </div>
    )
}

export default Invoice;