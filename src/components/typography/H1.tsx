type H1Props = {
    children: React.ReactNode
    className?: string
}

export default function H1({ children, className }: H1Props) {
    return <h1 className={`text-4xl font-semibold mb-4 ${className || ''}`}>{children}</h1>
}