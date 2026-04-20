type H4Props = {
    children: React.ReactNode
    className?: string
}

export default function H4({ children, className }: H4Props) {
    return <h4 className={`text-lg font-semibold mb-3 ${className || ''}`}>{children}</h4>
}
