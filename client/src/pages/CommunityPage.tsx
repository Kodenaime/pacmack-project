import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Goal from '../components/home/Goal'
import Highlights from '../components/home/Highlights'
import Sponsors from '../components/home/Sponsors'
import Team from '../components/home/Team'
import Faqs from '../components/home/Faqs'
import Contact from '../components/home/Contact'
import ConferenceDonation from '../components/parents/ConferenceDonation'
import Footer from '../layout/Footer'
import Testimonials from '../components/home/Testimonials'

const CommunityPage: React.FC = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Goal />
      <Highlights />
      <Testimonials />
      <Sponsors />
      <Team />
      <Faqs />
      <Contact />
      <ConferenceDonation />
      <Footer />
    </div>
  )
}

export default CommunityPage
