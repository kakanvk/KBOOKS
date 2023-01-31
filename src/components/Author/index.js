import AuthorItem from "./AuthorItem";
import "./author.css"
import Filter from "../Filter";
import { useContext, useEffect } from "react";
import { DataContext } from "../DataStore";

function Author() {

    const DataStore = useContext(DataContext);

    useEffect(() => {
        DataStore.setNavSelected(3);
    })

    return (
        <div className="container__content">
            <h2>Tác giả</h2>
            <div className="authorContainer">
                {
                    DataStore.authors.map((author, index) => {
                        return(
                            <AuthorItem data={author} key={index} countBook={DataStore.getCountBookByAuthorName(author.authorName)}/>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Author;