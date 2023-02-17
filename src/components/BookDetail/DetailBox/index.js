import "./index.css"
import { Link } from "react-router-dom";
import { DataContext } from "../../DataStore";
import { useContext } from "react";

function DetailBox (props) {

    const {bookName, authorName, releaseDate, category, description} = props.data;

    const DataStore = useContext(DataContext);

    return (
        <div className="DetailBoxBook">
            <div className="detail__item">
                <h4>Tác phẩm</h4>
                <span>{bookName}</span>
            </div>
            <div className="detail__item">
                <h4>Tác giả</h4>
                <Link to={`/author/${DataStore.getAuthorByName(authorName).id}`}>{authorName}</Link>
            </div>
            <div className="detail__item">
                <h4>Ngày phát hành</h4>
                <span>{releaseDate}</span>
            </div>
            <div className="detail__item">
                <h4>Thể loại</h4>
                <span>{category}</span>
            </div>
            <div className="detail__item">
                <h4>Mô tả</h4>
                <span style={{textAlign: "justify"}}>{description}</span>
            </div>
        </div>
    )
}

export default DetailBox;