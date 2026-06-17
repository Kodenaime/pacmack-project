import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Highlights from './pages/HighlightsPage'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'
import JoinCommunity from './pages/CommunityRegister'
import ParentsConference2026 from './pages/ParentsConference2026'
import ProgramsPage from './pages/ProgramsPage'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/conference2026' element={<ParentsConference2026 />} />
        <Route path='/highlights' element={<Highlights />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/join' element={<JoinCommunity/>} />
      </Routes>
    </div>
  )
}

export default App