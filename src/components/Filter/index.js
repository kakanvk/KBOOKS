import "./filter.css"
import filterIcon from "../../asset/imgs/filter.png"
import FilterItem from "./FilterItem";
import Popup from "./Popup";
import { useState, useContext  } from "react";
import { DataContextOfLibrary } from "../Library/DataContextOfLibrary";

function Filter() {
    const [openPopup, setOpenPopup] = useState(false);

    const dataStore = useContext(DataContextOfLibrary);

    return (
        <div className="filterContainer">
            { openPopup ? 
                <Popup setOpenPopup={setOpenPopup}/> : ""
            }
            <button className="btn-filter" onClick={() => setOpenPopup(true)}><img src={filterIcon} alt="" />Lọc</button>

            {dataStore.filtersData.author!=="Tất cả" ? 
                <FilterItem handleDelete={dataStore.handleDeleteAuthor}>
                    {dataStore.filtersData.author}
                </FilterItem> : ""
            }
            {dataStore.filtersData.category!=="Tất cả" ? 
                <FilterItem handleDelete={dataStore.handleDeleteCategory}>
                    {dataStore.filtersData.category}
                </FilterItem> : ""
            }
            {dataStore.filtersData.star!=="Tất cả" ? 
                <FilterItem handleDelete={dataStore.handleDeleteStar}>
                    {dataStore.filtersData.star}
                </FilterItem> : ""
            }
        </div>
    )
}

export default Filter;