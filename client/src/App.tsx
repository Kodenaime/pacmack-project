import React from 'react'
import { Routes, Route } from 'react-router'
import CommunityPage from './pages/CommunityPage'
import Highlights from './pages/HighlightsPage'
import Gallery from './pages/Gallery'
import JoinCommunity from './pages/CommunityRegister'
import ParentsConferencePage from './pages/ParentsConferencePage'
import ProgramsPage from './pages/ProgramsPage'
import ConferenceDetailsPage from './pages/ConferenceDetailsPage'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ParentsConferencePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/conference-details" element={<ConferenceDetailsPage />} />
        <Route path='/highlights' element={<Highlights />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/join' element={<JoinCommunity/>} />
      </Routes>
    </div>
  )
}

export default App