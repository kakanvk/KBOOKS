import { useContext } from "react";
import FollowButton from "../../Author/FollowButton";
import { DataContext } from "../../DataStore";
import "./index.css"

function AuthorMainBox(props) {

    const dataStore = useContext(DataContext);

    const { dataOfAuthor } = props;

    const countBook = dataStore.getCountBookByAuthorName(dataOfAuthor.authorName);

    function convert(num) {
        num = num.toString().replace(/[^0-9.]/g, '');
        if (num < 1000) {
            return num;
        }
        let si = [
            { v: 1E3, s: "K" },
            { v: 1E6, s: "M" },
            { v: 1E9, s: "B" },
            { v: 1E12, s: "T" },
            { v: 1E15, s: "P" },
            { v: 1E18, s: "E" }
        ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    }

    return (
        <div className="AuthorMainBox">
            <div className="AuthorMainBox__left">
                <img src={dataOfAuthor.linkAuthorAvt} alt="" />
            </div>
            <div className="AuthorMainBox__right">
                <h3>{dataOfAuthor.authorName}</h3>
                <span>{countBook} tác phẩm trên Kbooks</span>
                <div className="AuthorMainBox__right--btn">
                    <FollowButton authorId={dataOfAuthor.id} />
                    <span>{convert(dataOfAuthor.followers)} người theo dõi</span>
                </div>
            </div>
        </div>
    )
}

export default AuthorMainBox;