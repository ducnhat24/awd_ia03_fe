// src/pages/Home.tsx

export default function HomePage() {
    return (
        // Full-bleed hero that spans the full viewport width while keeping inner content centered
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
            <div className="text-center px-4 py-12 max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Chào mừng đến với Homepage
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Đây là trang chủ của bạn.
                </p>
            </div>
        </div>
    )
}