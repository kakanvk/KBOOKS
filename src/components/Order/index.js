import "./index.css"
import OrderItem from "./OrderItem";
import { useContext, useEffect } from "react";
import { DataContext } from "../DataStore";
import { useNavigate } from "react-router-dom";

function Order() {

    const navigate = useNavigate();

    const DataStore = useContext(DataContext);
    
    const fakeData = [
        {
            linkCover: "https://salt.tikicdn.com/cache/750x750/ts/product/56/ce/23/64b2eaa5b859d8ba1412f1b350c3e128.jpg.webp",
            counter: 3,
            toMoney: 399000,
            buyDate: "01/02/2023",
            status: "pending"
        },
        {
            linkCover: "https://salt.tikicdn.com/cache/750x750/ts/product/fd/61/1d/a19424cfe9d113c32732d93cf2d5f59a.jpg.webp",
            counter: 1,
            toMoney: 99000,
            buyDate: "14/01/2023",
            status: "complete"
        },
        {
            linkCover: "https://salt.tikicdn.com/cache/750x750/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg.webp",
            counter: 5,
            toMoney: 399000,
            buyDate: "09/01/2023",
            status: "pending"
        },
        {
            linkCover: "https://salt.tikicdn.com/cache/750x750/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg.webp",
            counter: 2,
            toMoney: 95000,
            buyDate: "11/12/2022",
            status: "cancel"
        },
        {
            linkCover: "https://salt.tikicdn.com/cache/750x750/ts/product/56/ce/23/64b2eaa5b859d8ba1412f1b350c3e128.jpg.webp",
            counter: 5,
            toMoney: 9000,
            buyDate: "11/12/2022",
            status: "cancel"
        }
    ]

    useEffect(() => {
        if(DataStore.isLogin===false) navigate('/login'); 
        DataStore.setNavSelected(7);
    })

    return (
        <div className="container__content">
            <div className="Order">
                <h2>Đơn hàng của tôi</h2>
                <div className="container__order">
                    <div className="container__order__label">
                        <span className="order__label__order">Đơn hàng</span>
                        <span className="order__label__date">Ngày đặt</span>
                        <span className="order__label__toMoney">Thành tiền</span>
                        <span className="order__label__stt">Trạng thái</span>
                    </div>
                    <div className="container__order__content">
                        {
                            fakeData.map((item, index) => {
                                return (
                                    <OrderItem data={item} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;