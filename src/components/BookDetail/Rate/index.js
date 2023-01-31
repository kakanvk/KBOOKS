import "./index.css"
import avt from "../../../asset/imgs/kaka.jpg"
import StarRate from "../../StarRate";

function Rate(props) {

    const { userName, rateContent, star, dateRate} = props;

    return (
        <div className="Rate">
            <div className="Rate__img">
                <div>
                    <img src={avt} alt=""/>
                </div>
                <span>{userName}</span>
            </div>
            <div className="Rate__star">
                <StarRate number={star}/>
                <span>{dateRate}</span>
            </div>
            <span>{rateContent}</span>
            <ion-icon name="ellipsis-vertical"></ion-icon>
        </div>      
    )
}

export default Rate;