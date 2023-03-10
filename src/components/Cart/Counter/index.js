import { useState } from "react";
import "./index.css"

function Counter(props) {

    const { initValue } = props;
    
    const [amount, setAmount] = useState(initValue ? initValue : 1);

    const handleRemove = () => {
        if(amount > 1)
        setAmount(amount - 1);
    }
    
    return (
        <div className="counter">
            <ion-icon name="remove-outline" onClick={() => handleRemove()}></ion-icon>
            <span>{amount}</span>
            <ion-icon name="add-outline" onClick={() => setAmount(amount + 1)}></ion-icon>
        </div>
    )
}

export default Counter;