import "./index.css"
import momoIcon from "../../../asset/imgs/momo.png"

function PaymentMethod () {
    return (
        <div className="PaymentMethod">
            <div className="PaymentMethod__item">
                <input type="radio" id="check__shipCOD" name="method" defaultChecked={true}/>
                <label htmlFor="check__shipCOD">Thanh toán khi nhận hàng (Ship COD)</label>
            </div>
            <div className="PaymentMethod__item">
                <input type="radio" id="check__momo" name="method"/>
                <label htmlFor="check__momo">Thanh toán qua MoMo <img src={momoIcon} alt=""/></label>
            </div>
        </div>
    )
}

export default PaymentMethod;