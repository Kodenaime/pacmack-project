import React,{ useEffect } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import HighlightsHero from '../components/highlights/HighlightsHero'
import About2025 from '../components/highlights/About2025'
import HighlightsSlider from '../components/highlights/HighlightsSlider'
import ConferenceDonation from '../components/parents/ConferenceDonation'
import Speakers2025 from '../components/highlights/Speakers2025'
import ConferenceVideo from '../components/highlights/ConferenceVideo'
import AboutConference from '../components/highlights/AboutConference'
import MkConferenceTeam from '../components/highlights/MkConferenceTeam'

const HighlightsPage: React.FC = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <HighlightsHero />
      <AboutConference />
      <About2025 />
      <HighlightsSlider />
      <Speakers2025 />
      <MkConferenceTeam />
      <ConferenceVideo />
      <ConferenceDonation />
      <Footer />
    </div>
  )
}

export default HighlightsPage