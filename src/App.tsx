import './App.css'
import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import Header from './components/Header'

function App() {


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Toaster richColors position="top-left" />
    </div>
  )
}

export default App