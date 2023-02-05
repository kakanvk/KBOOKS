import { useContext, useEffect } from "react";
import { DataContext } from "../DataStore";
import { Outlet } from "react-router-dom"

function ContainerCart() {

    const DataStore = useContext(DataContext);

    useEffect(() => {
        DataStore.setNavSelected(6);
    })

    return(
        <div>
            <Outlet/>
        </div>
    )
}

export default ContainerCart;