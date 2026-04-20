type H6Props = {
    children: React.ReactNode
    className?: string
}

export default function H6({ children, className }: H6Props) {
    return <h6 className={`text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700 mb-2 ${className || ''}`}>{children}</h6>
}
