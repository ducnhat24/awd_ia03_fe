import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="w-full sticky top-0 z-50 border-b bg-background/95 ">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="font-bold text-lg md:text-xl">
                    AuthSystem
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center md:space-x-4">
                    {/* Login: ghost but force blue text so it doesn't follow OS accent colors */}
                    <Button asChild variant="ghost" size="sm" className="!text-blue-600 hover:!bg-blue-50">
                        <Link to="/login">Đăng Nhập</Link>
                    </Button>
                    {/* Sign up: primary button with fixed blue */}
                    <Button asChild variant="default" size="sm" className="!bg-blue-600 !text-white hover:!bg-blue-700">
                        <Link to="/signup">Đăng Ký</Link>
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    aria-expanded={mobileOpen}
                    aria-label="Toggle menu"
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-muted"
                    onClick={() => setMobileOpen((s) => !s)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t bg-background/50">
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
                        <Button asChild variant="ghost" size="default" className="!text-blue-600 hover:!bg-blue-50 w-full text-left">
                            <Link to="/login" onClick={() => setMobileOpen(false)}>Đăng Nhập</Link>
                        </Button>
                        <Button asChild variant="default" size="default" className="!bg-blue-600 !text-white hover:!bg-blue-700 w-full text-center">
                            <Link to="/signup" onClick={() => setMobileOpen(false)}>Đăng Ký</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
