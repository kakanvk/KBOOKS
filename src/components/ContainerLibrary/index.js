import { useContext, useEffect } from "react";
import { DataContext } from "../DataStore";
import { Outlet } from "react-router-dom"
import "./index.css"

function ContainerLibrary() {

    const DataStore = useContext(DataContext);

    useEffect(() => {
        DataStore.setNavSelected(2);
    })

    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default ContainerLibrary;