import { Link } from "react-router-dom";
import OptionBox from "../OptionBox";
import "./authorItem.css"

function AuthorItem(props) {

    const { data, countBook } = props;

    const linkStyle = {
        color: "#7F00FF",
        textDecoration: "none",
        marginTop: "8px",
        fontWeight: "500",
        fontSize: "15px"
    }

    return (
        <div className="authorItem">
            <Link to={`/author/${data.id}`}>
                <div className="authorItem__img">
                    <img src={data.linkAuthorAvt} alt="Morgan Housel" />
                </div>
                <div className="authorItem__content">
                    <h2>{data.authorName}</h2>
                    <div>
                        <span>{data.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} người theo dõi</span>
                        <span>|</span>
                        <span>{countBook} tác phẩm trên KBOOKS</span>
                    </div>
                    <span style={linkStyle}>Xem thông tin</span>
                </div>
            </Link>
            <OptionBox authorId={data.id}/>
        </div>
    )
}

export default AuthorItem;