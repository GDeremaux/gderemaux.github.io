type H5Props = {
    children: React.ReactNode
    className?: string
}

export default function H5({ children, className }: H5Props) {
    return <h5 className={`text-sm font-semibold tracking-wide text-neutral-900 mb-2 ${className || ''}`}>{children}</h5>
}
