import "./index.css"
import followIcon from "../../../asset/imgs/follow.png"
import { useContext } from "react";
import { DataContext } from "../../DataStore";
var classNames = require('classnames');

function FollowButton (props) {

    const { authorId } = props;
 
    const dataStore = useContext(DataContext);

    const isFollowing = dataStore.isInFollowing(authorId)

    const handleClick = () => {
        isFollowing ? dataStore.unFollowing(authorId)
        : dataStore.addFollowing(authorId);
    }

    const btnClass = classNames('optionBox__follow', {activeFollow : isFollowing});

    const followButton = isFollowing ? (
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
        <div className={btnClass} onClick={handleClick}>
            {followButton}
        </div>
    )
}

export default FollowButton;