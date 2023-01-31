import "./OptionBox.css"
import followIcon from "../../../asset/imgs/follow.png"
import { useState } from "react";
var classNames = require('classnames');

function FollowButton() {
    const [activeFollow, setActiveFollow] = useState(false);

    const handleClick = () => {
        setActiveFollow(!activeFollow);
    }

    const btnClass = classNames('optionBox__follow', {activeFollow : activeFollow});

    const followButton = activeFollow ? (
        <>
            <img src={followIcon} alt=""/>
            <span>Đang theo dõi</span>
        </>
    ) : (
        <>
            <ion-icon name="add"></ion-icon>
            <span>Theo dõi</span>
        </>
    )

    return (
        <div className="optionBox">
            <div className="optionBox__share">
                <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <div className={btnClass} onClick={handleClick}>
                {followButton}
            </div>
        </div>
    )
}

export default FollowButton;