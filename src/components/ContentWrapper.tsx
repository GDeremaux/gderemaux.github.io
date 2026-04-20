type ContentWrapperProps = {
    children: React.ReactNode
}

export default function ContentWrapper({children}: ContentWrapperProps) {
    return (
        <main className="mx-auto max-w-7xl px-8">
            {children}
        </main>
    )
}