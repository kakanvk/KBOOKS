import "./index.css"
var classNames = require('classnames');

function OrderItem(props) {

    const { data } = props;

    const btnClass = classNames('Order__status', 
        {"stt__complete" : data.status==="complete"}, 
        {"stt__pending" : data.status==="pending"},
        {"stt__cancel" : data.status==="cancel"},
    );

    const statusLb = data.status==="complete" ?
    <>
        <ion-icon name="checkmark-circle"></ion-icon>
        <span>Đã giao</span>
    </> : data.status==="cancel" ?
    <>
        <ion-icon name="close-circle"></ion-icon>
        <span>Đã huỷ</span>
    </> : 
    <>
        <ion-icon name="time"></ion-icon>
        <span>Đang giao</span>
    </>

    return (
        <div className="OrderItem">
            <div className="OrderItem__book">
                <div className="OrderItem__img">
                    <img src={data.linkCover} alt=""/>
                </div>
                <h3>Tổng cộng {data.counter} sản phẩm</h3>
            </div>
            <span className="OrderItem__buyDate">{data.buyDate}</span>
            <span className="OrderItem__toMoney">{data.toMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
            <div className={btnClass}>
                {statusLb}
            </div>
        </div>
    )
}

export default OrderItem;