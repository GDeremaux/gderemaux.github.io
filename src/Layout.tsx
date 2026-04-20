import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}