import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import ContentWrapper from "./components/ContentWrapper"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout() {
    return (
        <div>
            <Navbar />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </div>
    )
}