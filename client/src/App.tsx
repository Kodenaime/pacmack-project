import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </div>
  )
}

export default App