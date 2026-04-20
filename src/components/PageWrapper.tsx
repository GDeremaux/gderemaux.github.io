type PageWrapperProps = {
    children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="pt-8">
            {children}
        </div>
    )
}