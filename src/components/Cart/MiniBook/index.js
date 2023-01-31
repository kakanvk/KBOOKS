import "./minibook.css"

function MiniBook(props) {

    const { miniBookData } = props;

    return (
        <div className="miniBook">
            <div className="bookBox__img">
                <img src={miniBookData.linkBookCover} alt="Book Cover"/>
            </div>
            <div className="bookBox__content">
                <h3>{miniBookData.bookName}</h3>
                <p>{miniBookData.authorName}</p>
                <span className="price">{miniBookData.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span>
            </div>
        </div>
    )
}

export default MiniBook;