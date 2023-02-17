import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../DataStore";
import { Outlet } from "react-router-dom"
import "./index.css"

function ContainerLibrary() {

    const DataStore = useContext(DataContext);

    const myDivRef = useRef(null);
    
    function handleScroll() {
        // const scrollTop = myDivRef.current.scrollTop;
        console.log("KA"); // log vị trí scroll Y của div
    }

    useEffect(() => {
        DataStore.setNavSelected(2);
    })

    return(
        <div ref={myDivRef} onScroll={handleScroll}>
            <Outlet/>
        </div>
    )
}

export default ContainerLibrary;