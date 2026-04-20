type AProps = {
    children: React.ReactNode
    href?: string
    newTab?: boolean
    className?: string
}

export default function A({ children, href, newTab, className }: AProps) {
    return (
        <a
            href={href}
            target={newTab ? "_blank" : "_self"}
            className={`text-black underline decoration-neutral-400 underline-offset-4 transition-colors transition-[text-decoration-color] cursor-pointer hover:decoration-black ${className || ''}`}
        >
            {children}
        </a>
    )
}
