import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import HighlightsHero from '../components/highlights/HighlightsHero'
import About2025 from '../components/highlights/About2025'
import HighlightsSlider from '../components/highlights/HighlightsSlider'
import Donation from '../components/home/Donation'
import Speakers2025 from '../components/highlights/Speakers2025'
import ConferenceVideo from '../components/highlights/ConferenceVideo'

const HighlightsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HighlightsHero />
      <About2025 />
      <HighlightsSlider />
      <Speakers2025 />
      <ConferenceVideo />
      <Donation />
      <Footer />
    </div>
  )
}

export default HighlightsPage