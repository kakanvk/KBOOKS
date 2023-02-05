import { useParams } from "react-router-dom";
import { DataContext } from "../DataStore";
import { useContext } from "react";
import DetailBox from "./DetailBox";
import "./index.css"
import MainBox from "./MainBox";
import PathBox from "./PathBox";
import Rate from "./Rate";

function BookDetail () {

    const dataStore = useContext(DataContext);
    const { bookId } = useParams();

    const book = dataStore.getBookById(bookId);

    return (
        <div className="container__content">
            <div className="authorDetail">
                { book && <PathBox parentPath={"/library"} parentValue={"Thư viện"} childValue={book.bookName}/>}
                <div className="authorDetail__content">
                    <div className="authorDetail__content__left">
                        <div>
                            <h2>Tổng quan</h2>
                            {book && <MainBox data={book}/>}
                        </div>
                        <div>
                            <h2>Đánh giá</h2>
                            <div className="Rate__container">           
                                <Rate userName={"Ka Ka"} star={3} rateContent={"Sách rất hay và bổ ích ^^"} dateRate={"11/04/2022"}/>           
                                <Rate userName={"Người dùng nào đó"} star={4} rateContent={"Sách rất hay và bổ ích ^^"} dateRate={"11/04/2022"}/>
                                <Rate userName={"Ka Ka"} star={3} rateContent={"Sách rất hay và bổ ích ^^"} dateRate={"11/04/2022"}/>           
                                <Rate userName={"Người dùng nào đó"} star={4} rateContent={"Sách rất hay và bổ ích ^^"} dateRate={"11/04/2022"}/>
                            </div>
                        </div>
                    </div>
                    <div className="authorDetail__content__right">
                        <h2>Chi tiết</h2>
                        {book && <DetailBox data={book} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;