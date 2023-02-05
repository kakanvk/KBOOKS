import Home from "../Home";
import { Route, Routes } from "react-router-dom";
import "./style.css"
import Library from "../Library";
import Author from "../Author";
import NotFound from "../NotFound";
import Cart from "../Cart";
import Like from "../Like";
import Order from "../Order";
import Contact from "../Contact";
import AuthorDetail from "../AuthorDetail";
import { DataProviderOfLibrary } from "../Library/DataContextOfLibrary";
import BookDetail from "../BookDetail";
import ContainerLibrary from "../ContainerLibrary";
import ContainerAuthor from "../ContainerAuthor";
import CompleteOrder from "../CompleteOrder";
import ContainerCart from "../ContainerCart";

function Content() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/library" element={<DataProviderOfLibrary><ContainerLibrary/></DataProviderOfLibrary>}>
                    <Route index element={<Library/>}/>
                    <Route path=':bookId' element={<BookDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/author" element={<DataProviderOfLibrary><ContainerAuthor/></DataProviderOfLibrary>}>
                    <Route index element={<Author/>}/>
                    <Route path=':authorId' element={<AuthorDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/like" element={<Like/>}/>
                <Route path="/cart" element={<ContainerCart/>}>
                    <Route index element={<Cart/>}/>
                    <Route path='complete-order' element={<CompleteOrder/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="/order" element={<Order/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/author-detail" element={<AuthorDetail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default Content;