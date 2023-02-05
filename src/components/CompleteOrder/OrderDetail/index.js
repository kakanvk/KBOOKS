import { useContext } from "react";
import { DataContext } from "../../DataStore";
import "./index.css"
import OrderItem from "./OrderItem";

function OrderDetail () {

    const DataStore = useContext(DataContext);

    return (
        <div className="OrderDetail">
            {
                DataStore.cart.map((item, index) => {
                    return(
                        item.selected ? <OrderItem key={index} data={item}/> : ""
                    )
                })
            }
        </div>
    )
}

export default OrderDetail;