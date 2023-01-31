import Book from "../Book";
import Filter from "../Filter";
import "./index.css"
import { useContext } from "react";
import { DataContextOfLibrary } from "./DataContextOfLibrary";

function Library() {
    const dataStore = useContext(DataContextOfLibrary);

    // Filter by Author
    let dataFiltered = dataStore.dataBooks.filter((book) => {
        return (
            (dataStore.filtersData.author === "Tất cả" || book.authorName === dataStore.filtersData.author)
        )
    })

    // Filter by Category
    dataFiltered = dataFiltered.filter((book) => {
        return (
            (dataStore.filtersData.category === "Tất cả" || book.category === dataStore.filtersData.category)
        )
    })

    // Filter by Star
    dataFiltered = dataFiltered.filter((book) => {
        return (
            (dataStore.filtersData.star === "Tất cả" || parseInt(book.star) === parseInt(dataStore.filtersData.star))
        )
    })

    return (
        <div className="container__content">
            <Filter />
            <h2>Thư viện</h2>
            <div className="grid container_book_library">
                <div className="row">
                    {
                        dataFiltered.length!==0 ? dataFiltered.map((item, index) => {
                            return (
                                <Book data={item} key={index} />
                            )
                        }) : 
                        <div className="FilterNotFound">
                            <ion-icon name="close-circle"></ion-icon>
                            <span>Không tìm thấy kết quả phù hợp.</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Library;