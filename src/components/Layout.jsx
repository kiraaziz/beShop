import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Outlet } from "react-router-dom"
import Screen from "./Screen"

const Layout =()=>{

    return(
        <Screen>{import.meta.env.x}
            <div className=" w-full h-16 bg-zinc-900 space-x-3 py-2 px-10 flex items-row items-center justify-evenly">
            <div className="flex-1 h-full flex items-center">
                <a href="/" className="text-xl">Be Shop</a>
            </div>
            <a href="/cart" className="h-10 w-10 p-1.5 rounded-lg hover:bg-zinc-800 hover:scale-110 ease-in-out duration-150">
                <ShoppingCartIcon className="text-white" /> 
            </a>
            </div>
            <div className="h-full w-full overflow-y-auto ">
                <Outlet />
            </div>
        </Screen>
    )
}

export default Layout