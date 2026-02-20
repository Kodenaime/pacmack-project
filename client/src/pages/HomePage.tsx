import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Goal from '../components/home/Goal'
import Highlights from '../components/home/Highlights'
import Sponsors from '../components/home/Sponsors'
import Team from '../components/home/Team'
import Faqs from '../components/home/Faqs'
import Contact from '../components/home/Contact'
import Donation from '../components/home/Donation'
import Footer from '../layout/Footer'

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Goal />
      <Highlights />
      <Sponsors />
      <Team />
      <Faqs />
      <Contact />
      <Donation />
      <Footer />
    </div>
  )
}

export default HomePage