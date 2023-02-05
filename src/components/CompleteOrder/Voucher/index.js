import "./index.css"

function Voucher () {
    return(
        <div className="Voucher">
            <div className="Voucher__top">
                <input type="text" placeholder="Nhập mã giảm giá"/>
                <ion-icon name="search"></ion-icon>
            </div>
            <div className="Voucher__bottom">
                <span>Chưa áp dụng voucher nào</span>
            </div>
        </div>
    )
}

export default Voucher;