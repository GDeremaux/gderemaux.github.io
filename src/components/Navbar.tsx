import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <header className="sticky top-0 h-16 px-6 backdrop-blur-md backdrop-brightness-100 border-b border-neutral-200">
            <div className="h-full w-full mx-auto max-w-7xl flex flex-row gap-4 items-center justify-end">
                <NavbarLink to="/projects">Projects</NavbarLink>
            </div>
        </header>
    )
}