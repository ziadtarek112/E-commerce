import { Outlet } from "react-router-dom"
import Navabar from "./navbar/Navabar"
import Footer from "./footer/Footer"

const Layout = () => {
    return (
        <div className="app">
            <Navabar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout