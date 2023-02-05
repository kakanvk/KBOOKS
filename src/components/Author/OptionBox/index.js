import "./OptionBox.css"
import FollowButton from "../FollowButton";


function OptionBox(props) {

    const { authorId } = props;

    return (
        <div className="optionBox">
            <div className="optionBox__share">
                <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <FollowButton authorId={ authorId }/>
        </div>
    )
}

export default OptionBox;