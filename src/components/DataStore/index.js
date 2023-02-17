import { useState, createContext, useEffect } from "react";

const DataContext = createContext();

function DataStore({children}) {

    // Trạng thái active của thanh navigation
    const [navSelected, setNavSelected] = useState(1);

    // Người dùng đã đăng nhập hay chưa
    const [isLogin, setIsLogin] = useState(false);

    // Dữ liệu sách trong giỏ hàng
    const [cart, setCart] = useState([]);

    const [selectedAll, setSelectedAll] = useState(false);

    // Dữ liệu sách trong danh sách yêu thích
    const [likeList, setLikeList] = useState([])

    // Dữ liệu tất cả sách của thư viện
    const [dataBooks, setDataBooks] = useState([])
    
    // Dữ liệu tất cả các tác giả
    const [authors, setAuthors] = useState([])

    // Dữ liệu các tác giả đang follow
    const [following, setFollowing] = useState([])

    // Call API
    useEffect(() => {
        fetch("https://api.kakanie.com/books")
        .then((res) => res.json())
        .then((res) => setDataBooks(res));

        fetch("https://api.kakanie.com/authors")
        .then((res) => res.json())
        .then((res) => setAuthors(res));
    }, [])

    const getBookById = (id) => {
        return (
            dataBooks.find((item) => item.id.toString() === id.toString())
        )
    }

    const getAuthorById = (id) => {
        return (
            authors.find((item) => item.id.toString() === id.toString())
        )
    }

    const getAuthorByName = (authorName) => {
        const author = authors.find((item) => item.authorName.toString() === authorName.toString())
        return (
            author===undefined ? 0 : author
        )
    }

    const getBooksByAuthorName = (authorName) => {
        return (
            dataBooks.filter((item) => item.authorName === authorName)
        )
    }

    const isInCart = (id) => {
        const book = cart.find((item) => item.id === id)
        return book ? book.counter : false;
    }

    const isInLikeList = (id) => {
        const book = likeList.find((item) => item === id)
        return book ? true : false;
    }

    const isInFollowing = (id) => {
        const author = following.find(item => item === id);
        return author ? true : false;
    }

    const addFollowing = (id) => {
        const newFollowing = [
            id,
            ...following
        ]
        setFollowing(Array.from(new Set(newFollowing)));
    }

    const unFollowing = (id) => {
        const newFollowing = following.filter(item => item !== id);

        setFollowing(Array.from(new Set(newFollowing)));
    }

    const getCountBookByAuthorName = (_authorName) => {
        const count = dataBooks.filter((item) => item.authorName === _authorName);
        return count ? count.length : 0;
    }

    const getPayFromCart = () => {
        let pay = 0;
        cart.map(item => item.selected ? pay += item.toMoney : "")
        return pay;
    }

    const getSelectedFromCart = () => {
        let count = 0;
        cart.map(item => count += item.selected)
        return count;
    }

    const selectAllCart = () => {
        const newCart = cart.map(item => {
            item.selected = true
            return item;
        })
        setCart(newCart)
    }

    const unselectAllCart = () => {
        const newCart = cart.map(item => {
            item.selected = false
            return item;
        })
        setCart(newCart)
    }
    
    const handleChageSelect = () => {
        selectedAll ? unselectAllCart() : selectAllCart();
        setSelectedAll(!selectedAll);
    }

    const changeSelectById = (id) => {
        const cartIndex = cart.findIndex(item => item.id === id);
        let newCart = cart;
        newCart[cartIndex].selected = !cart[cartIndex].selected;
        setCart(newCart)
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
        getCountBookByAuthorName,
        getPayFromCart, 
        following, setFollowing,
        getAuthorById,
        isInFollowing,
        addFollowing, unFollowing,
        getSelectedFromCart,
        selectAllCart,
        unselectAllCart,
        handleChageSelect,
        selectedAll, setSelectedAll,
        changeSelectById,
        getBooksByAuthorName,
        getAuthorByName
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export { DataStore, DataContext};