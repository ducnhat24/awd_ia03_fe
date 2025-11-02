import './App.css'
import { Outlet, Link } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="font-bold">
            AuthSystem
          </Link>
          <div className="flex items-center gap-4">
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
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Toaster richColors />
    </div>
  )
}

export default App