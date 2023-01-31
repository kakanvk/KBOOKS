import { useState, createContext, useEffect } from "react";

const DataContext = createContext();

function DataStore({children}) {

    // Trạng thái active của thanh navigation
    const [navSelected, setNavSelected] = useState(1);

    // Người dùng đã đăng nhập hay chưa
    const [isLogin, setIsLogin] = useState(false);

    // Dữ liệu sách trong giỏ hàng
    const [cart, setCart] = useState([]);

    // Dữ liệu sách trong danh sách yêu thích
    const [likeList, setLikeList] = useState([])

    // Dữ liệu tất cả sách của thư viện
    const [dataBooks, setDataBooks] = useState([])
    
    // Dữ liệu tất cả các tác giả
    const [authors, setAuthors] = useState([])

    // Call API
    useEffect(() => {
        fetch("https://kbooks-api.glitch.me/books")
        .then((res) => res.json())
        .then((res) => setDataBooks(res));

        fetch("https://kbooks-api.glitch.me/authors")
        .then((res) => res.json())
        .then((res) => setAuthors(res));
    }, [])

    const getBookById = (id) => {
        return (
            dataBooks.find((item) => item.id===id)
        )
    }

    const isInCart = (id) => {
        const book = cart.find((item) => item === id)
        return book ? true : false;
    }

    const isInLikeList = (id) => {
        const book = likeList.find((item) => item === id)
        return book ? true : false;
    }

    const getCountBookByAuthorName = (_authorName) => {
        const count = dataBooks.filter((item) => item.authorName === _authorName);
        return count ? count.length : 0;
    }

    const navData = [
        {
            id: 1,
            content: "Trang chủ",
            path: "/",
            iconName: "home"
        },
        {
            id: 2,
            content: "Thư viện",
            path: "/library",
            iconName: "book"
        },
        {
            id: 3,
            content: "Tác giả",
            path: "/author",
            iconName: "bookmark"
        },
        {
            id: 4,
            content: "Liên hệ",
            path: "/contact",
            iconName: "call"
        },
        {
            id: 5,
            content: "Yêu thích",
            path: "/like",
            iconName: "heart"
        },
        {
            id: 6,
            content: "Giỏ hàng",
            path: "/cart",
            iconName: "bag"
        },
        {
            id: 7,
            content: "Đơn hàng",
            path: "/order",
            iconName: "pricetag"
        }
    ]

    const value = {
        navSelected,
        setNavSelected,
        navData,
        isLogin,
        setIsLogin,
        cart, setCart,
        likeList, setLikeList,
        getBookById,
        dataBooks, setDataBooks,
        authors, setAuthors,
        isInCart,
        isInLikeList,
        getCountBookByAuthorName
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export { DataStore, DataContext};