type PProps = {
    children: React.ReactNode
    className?: string
}

export default function P({ children, className }: PProps) {
    return <p className={`text-base text-gray-700 mb-4 ${className || ''}`}>{children}</p>
}