import "./style.css"

function SearchBox(){
    return(
        <div className="searchBox">
            <ion-icon name="search"></ion-icon>
            <input type="text" placeholder="Tìm kiếm sách, tác giả,..."/>
        </div>
    )
}

export default SearchBox;