type H2Props = {
    children: React.ReactNode
    className?: string
}

export default function H2({ children, className }: H2Props) {
    return <h2 className={`text-2xl font-semibold mb-4 ${className || ''}`}>{children}</h2>
}