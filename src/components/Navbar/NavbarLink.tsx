import { NavLink } from "react-router";

type NavbarLinkProps = {
    to: string,
    children: React.ReactNode
};

export default function NavbarLink(
    {to, children}: NavbarLinkProps
) {
    return (
        <NavLink
            to={to}
            className={ ({isActive}) =>
                [
                    "h-10 inline-flex flex-row items-center p-4 rounded-full transition duration-300 hover:bg-neutral-950 hover:text-neutral-50",
                    (isActive ? "bg-neutral-950 text-neutral-50" : "")
                ].join(" ")
            }
        >
            {children}
        </NavLink>
    )
}