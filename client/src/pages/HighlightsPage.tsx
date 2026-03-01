import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import HighlightsHero from '../components/highlights/HighlightsHero'
import About2025 from '../components/highlights/About2025'
import HighlightsSlider from '../components/highlights/HighlightsSlider'

const HighlightsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HighlightsHero />
      <About2025 />
      <HighlightsSlider />
      <Footer />
    </div>
  )
}

export default HighlightsPage