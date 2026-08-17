import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PlenaryTopics from '../components/parents/PlenaryTopics';
import ConferenceWorkshops from '../components/parents/ConferenceWorkshops';

const ConferenceDetailsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32 pb-20">
        <div className="container-lg mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Conference <span className="text-primary">Program</span>
          </h1>
          <p className="text-brand-text max-w-2xl mx-auto text-base md:text-lg">
            Explore the complete directory of plenary sessions and workshop tracks scheduled for the PACMACK Parents Conference 2026.
          </p>
        </div>

        <PlenaryTopics />
        <ConferenceWorkshops />
      </main>

      <Footer />
    </div>
  );
};

export default ConferenceDetailsPage;
