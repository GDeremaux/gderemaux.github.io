type H3Props = {
    children: React.ReactNode
    className?: string
}

export default function H3({ children, className }: H3Props) {
    return <h3 className={`text-xl font-semibold mb-3 ${className || ''}`}>{children}</h3>
}
