import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { FiMessageSquare, FiUploadCloud } from 'react-icons/fi';

const Resources: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />
      
      <main className="grow pt-32 pb-20">
        <div className="container-lg text-center">
          
          <div className="max-w-3xl mx-auto bg-brand-white p-12 rounded-3xl shadow-soft border border-brand-gray/10">
            <div className="bg-primary-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
              <FiUploadCloud size={40} />
            </div>
            
            <h1 className="text-4xl font-bold text-brand-black mb-6">Community Resource Hub</h1>
            <p className="text-brand-text text-lg mb-10 leading-relaxed">
              We are building a space specifically for resources created by **MKs and CCKs**. 
              From books and blogs to music and podcasts, this library will showcase the 
              wealth of experience within our community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-brand-bg rounded-xl text-left">
                <h3 className="font-bold text-brand-black mb-2">Have a resource?</h3>
                <p className="text-sm text-brand-text">Share your work with the community and inspire others.</p>
              </div>
              <div className="p-6 bg-brand-bg rounded-xl text-left">
                <h3 className="font-bold text-brand-black mb-2">Looking for 2025?</h3>
                <p className="text-sm text-brand-text">Conference sessions have moved to our dedicated Highlights page.</p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-primary text-brand-black px-8 py-3 rounded-lg font-bold mx-auto transition-smooth hover:scale-105">
              <FiMessageSquare /> Suggest a Resource
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;