import Slider from "../Slider";
import { Link } from "react-router-dom";
import Book from "../Book";
import "./home.css"
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataStore";

function Home() {

    const DataStore = useContext(DataContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [propose, setPropose] = useState([]);

    useEffect(() => {
        DataStore.setNavSelected(1);
    })

    useEffect(() => {
        fetch("https://api.kakanie.com/bestSeller")
        .then((res) => res.json())
        .then((res) => setBestSeller(res));

        fetch("https://api.kakanie.com/propose")
        .then((res) => res.json())
        .then((res) => setPropose(res));
    }, [])

    return (
        <div className="container__content ">
            <Slider />
            <div className="grid">
                <div className="title__1">
                    <h3>Mới nhất</h3>
                    <Link to="/library" ><span>Xem thêm</span><ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
                <div className="row">
                    {
                        bestSeller.map((item, index) => {
                            return (
                                <Book data={item} key={index} />
                            )
                        })
                    }
                </div>
                <div className="title__1">
                    <h3>Được đề xuất</h3>
                    <Link to="/library" ><span>Xem thêm</span><ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
                <div className="row">
                    {
                        propose.map((item, index) => {
                            return (
                                <Book data={item} key={index} />
                            )
                        })
                    }
                </div>
                <div className="title__1">
                    <h3>Bán chạy nhất</h3>
                    <Link to="/library" ><span>Xem thêm</span><ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
                <div className="row">
                    {
                        bestSeller.map((item, index) => {
                            return (
                                <Book data={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Home;