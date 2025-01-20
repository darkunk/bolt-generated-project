import React from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Listings from './pages/Listings'
    import Dashboard from './pages/Dashboard'
    import Messages from './pages/Messages'
    import Navbar from './components/Navbar'

    export default function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      )
    }
