import DetailBox from "./DetailBox";
import PathBox from "../BookDetail/PathBox";
import "./index.css"
import AuthorMainBox from "./AuthorMainBox";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataStore";
import { useContext } from "react";
import Book from "../Book";

function AuthorDetail () {

    const dataStore = useContext(DataContext);

    const { authorId } = useParams()

    const author = dataStore.getAuthorById(authorId);

    const books = author && dataStore.getBooksByAuthorName(author.authorName);

    return(
        <div className="container__content">
            <div className="authorDetail">
                {author && <PathBox parentPath={"/author"} parentValue={"Tác giả"} childValue={author.authorName}/>}
                <div className="authorDetail__content">
                    <div className="authorDetail__content__left">
                        <div>
                            <h2>Chi tiết</h2>
                            {author && <AuthorMainBox dataOfAuthor={author}/>}
                        </div>
                        <div>
                            <h2>Tác phẩm nổi bật</h2>
                            <div className="tpnb row">
                                {
                                    books && books.map((item, index) => {
                                        return (
                                            <Book key={index} data={item} classN="col l-4 m-6 c-12"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="authorDetail__content__right">
                        <h2>Thông tin</h2>
                        {author && <DetailBox data={author}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorDetail;