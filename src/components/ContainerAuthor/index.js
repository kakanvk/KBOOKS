import { useContext, useEffect } from "react";
import { DataContext } from "../DataStore";
import { Outlet } from "react-router-dom"
import "./index.css"

function ContainerAuthor() {

    const DataStore = useContext(DataContext);

    useEffect(() => {
        DataStore.setNavSelected(3);
    })

    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default ContainerAuthor;