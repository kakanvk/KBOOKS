import Button from "../../Button";
import Combobox from "../../Combobox"
import "./popup.css"
import reloadIcon from "../../../asset/imgs/reload.png"
import {useContext, useState} from 'react';
import { DataContextOfLibrary } from "../../Library/DataContextOfLibrary";

function Popup(props) {
    const dataStore = useContext(DataContextOfLibrary);

    const [selecteds, setSelecteds] = useState(dataStore.filtersData);

    const handleOK = () => {
        dataStore.handleChangeFilter(selecteds);
        props.setOpenPopup(false);
    }

    const handleChangeAuthor = (newAuthor) => {
        const newSelecteds = {
            ...selecteds,
            author: newAuthor
        }
        setSelecteds(newSelecteds);
    }

    const handleChangeCategory = (newCategory) => {
        const newSelecteds = {
            ...selecteds,
            category: newCategory
        }
        setSelecteds(newSelecteds);
    }

    const handleChangeStar = (newStar) => {
        const newSelecteds = {
            ...selecteds,
            star: newStar
        }
        setSelecteds(newSelecteds);
    }

    const handleReset = () => {
        const newSelecteds = {
            author: "Tất cả",
            category: "Tất cả",
            star: "Tất cả"
        }
        dataStore.setFiltersData(newSelecteds);
        setSelecteds(newSelecteds);
        props.setOpenPopup(false);
    }

    const optionAuthor = Array.from(new Set(dataStore.dataBooks.map(book => {
        return book.authorName;
    })))

    const optionTheloai = Array.from(new Set(dataStore.dataBooks.map(book => {
        return book.category;
    })))

    const starRate = [
        "Tất cả",
        "0 sao",
        "1 sao",
        "2 sao",
        "3 sao",
        "4 sao",
        "5 sao"
    ]

    return (
        <>
            <div className="popupFilter">
                <div className="popupFilter_box">
                    <h2>Tuỳ chỉnh lọc</h2>
                    <Combobox dataSource={["Tất cả", ...optionAuthor]} selected={dataStore.filtersData.author} handleChange={handleChangeAuthor}>Tác giả</Combobox>
                    <Combobox dataSource={["Tất cả", ...optionTheloai]} selected={dataStore.filtersData.category} handleChange={handleChangeCategory}>Thể loại</Combobox>        
                    <Combobox dataSource={starRate} selected={dataStore.filtersData.star} handleChange={handleChangeStar}>Đánh giá</Combobox>            
                    <div className="popupFilter_box__option">
                        <div className="popupFilter_box__option__left" onClick={handleReset}><img src={reloadIcon} alt="" /></div>
                        <div className="popupFilter_box__option__right">
                            <Button onClick={() => props.setOpenPopup(false)}>Huỷ</Button>
                            <Button type="fill" onClick={handleOK}>OK</Button>
                        </div>
                    </div>
                </div>
                <div className="overplay" onClick={() => props.setOpenPopup(false)}></div>
            </div>
        </>
    )
}

export default Popup;