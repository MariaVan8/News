import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../scss/App.scss'
import Header from '../components/Header'
import Homepage from '../pages/Homepage'
import Footer from '../components/Footer'

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRouter
