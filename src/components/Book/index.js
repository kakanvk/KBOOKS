import { Link } from "react-router-dom";
import StarRate from "../StarRate";
import "./book.css"

function Book(props) {
    const data = props.data;

    return (
        <div className="col l-3 m-4 c-6">
            <Link
                to={`/library/${data.id}`}
                style={
                    {
                        textDecoration: "none"
                    }
                }
            >
                <div className="bookBox">
                    <div className="bookBox__img">
                        <img src={data.linkBookCover} alt="Book Cover" />
                    </div>
                    <div className="bookBox__content">
                        <h3>{data.bookName}</h3>
                        <span>{data.authorName}</span>
                        <StarRate number={data.star}/>
                        <div className="bookBox__content__price">
                            <span>{data.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                            <span>{data.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
                        </div>
                    </div>
                </div>
            </Link>         
        </div>
    )
}

export default Book;