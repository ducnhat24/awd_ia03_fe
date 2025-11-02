import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to="/login" className="hover:underline">
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                    >
                        Sign Up
                    </Link>
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
                        <Link
                            to="/login"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-left hover:underline"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full rounded-md bg-primary px-4 py-2 text-center text-primary-foreground hover:bg-primary/90"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
