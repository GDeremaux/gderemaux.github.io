type EyebrowProps = {
    children: React.ReactNode,
    className?: string
}

export default function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <p className={`text-sm uppercase tracking-wide text-gray-500 mb-6 ${className || ''}`}>
            {children}
        </p>
    )
}