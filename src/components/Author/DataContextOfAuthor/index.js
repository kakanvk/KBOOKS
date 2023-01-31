import { createContext, useState } from "react"
import dataBooks from "../../../asset/JSON/Books.json"

const DataContextOfLibrary = createContext();

function DataProviderOfLibrary({children}) {

    const [filtersData, setFiltersData] = useState({
        author: "Tất cả",
        category: "Tất cả",
        star: "Tất cả"
    })

    const handleChangeFilter = (newData) => {
        const newFilters = {
            ...filtersData,
            author: newData.author,
            category: newData.category,
            star: newData.star
        }

        setFiltersData(newFilters);
    }

    const handleDeleteAuthor = () => {
        const newFilters = {
            ...filtersData,
            author: "Tất cả"
        }

        setFiltersData(newFilters);
    }

    const handleDeleteCategory = () => {
        const newFilters = {
            ...filtersData,
            category: "Tất cả"
        }

        setFiltersData(newFilters);
    }

    const handleDeleteStar = () => {
        const newFilters = {
            ...filtersData,
            star: "Tất cả"
        }

        setFiltersData(newFilters);
    }

    const value = {
        dataBooks,
        filtersData,
        setFiltersData,
        handleChangeFilter,
        handleDeleteAuthor,
        handleDeleteCategory,
        handleDeleteStar
    }

    return (
        <DataContextOfLibrary.Provider value={value}>
            {children}
        </DataContextOfLibrary.Provider>
    )
}

export {DataContextOfLibrary, DataProviderOfLibrary} ;