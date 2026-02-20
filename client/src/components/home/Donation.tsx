import React, { useState } from 'react';
import { FiGift, FiX } from "react-icons/fi";

const Donation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="py-12" id="donate">
      <div className="container-lg">
        {/* Banner with Background Image */}
        <div className="relative overflow-hidden rounded-2xl bg-[url('/donation.jpg')] bg-cover bg-center">
          {/* Overlay */}
          <div className="bg-black/60 py-16 px-6 text-center text-white">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold">Support PACMACK</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Your gift helps us support, equip, and empower African missionary and cross-cultural kids 
                with hope, identity, and purpose. Give today and be part of something eternal.
              </p>
              
              <button 
                className="flex items-center gap-2 bg-primary text-brand-black px-8 py-3 rounded-lg font-bold shadow-medium transition-smooth hover:scale-105 active:scale-95"
                onClick={toggleModal}
              >
                <FiGift className="text-xl" /> Kindly Donate
              </button>
            </div>
          </div>
        </div>

        {/* Donation Details Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white text-brand-black w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-deep animate-in fade-in zoom-in duration-300">
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 p-2 text-2xl text-brand-text hover:text-brand-black transition-smooth" 
                onClick={toggleModal}
              >
                <FiX />
              </button>
              
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-primary mb-4 border-b pb-2">Donation Information</h3>
                
                <p className="mb-6 leading-relaxed">
                  Donations support our community initiatives, including subsidized costs for regional gatherings 
                  and travel assistance for MKs from under-resourced regions.
                </p>

                {/* Impact Story */}
                <div className="bg-green-100 p-6 rounded-xl mb-8 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold mb-2">Why support PACMACK?</h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>• Empower MKs/PKs to thrive in faith and vocation.</li>
                    <li>• Bridge financial gaps for community participants.</li>
                    <li>• Validate the importance of MK care within African missions.</li>
                  </ul>
                </div>

                <p className="text-sm italic mb-8">
                  Calvary Ministries CAPRO is our financial partner. <strong>Please ALWAYS</strong> indicate <b>PACMACK</b> for every transfer.
                </p>

                {/* Accounts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* USA */}
                  <div className="bg-brand-bg p-5 rounded-xl border-l-4 border-primary">
                    <h5 className="font-bold mb-3">USA Account (501C)</h5>
                    <div className="text-sm space-y-2">
                      <p><strong>Online:</strong> <a href="https://www.caprousa.org" target="_blank" className="text-primary underline">caprousa.org</a></p>
                      <p><strong>Zelle:</strong> caprousafinance@gmail.com</p>
                      <p className="text-xs text-brand-text italic">Narration: PACMACK</p>
                    </div>
                  </div>

                  {/* UK */}
                  <div className="bg-brand-bg p-5 rounded-xl border-l-4 border-primary">
                    <h5 className="font-bold mb-3">UK Account (Barclays)</h5>
                    <div className="text-sm space-y-1">
                      <p>Sort: 207106</p>
                      <p>Acc: 23826260</p>
                      <p>Narration: <strong>PACMACK</strong></p>
                    </div>
                  </div>

                  {/* Nigeria */}
                  <div className="bg-brand-bg p-5 rounded-xl border-l-4 border-primary md:col-span-2">
                    <h5 className="font-bold mb-3">Nigeria Account (Zenith)</h5>
                    <div className="text-sm space-y-1">
                      <p>Acc Name: Calvary Ministries</p>
                      <p>Acc Number: 1011864528</p>
                      <p>Narration: <strong>PACMACK</strong></p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm font-medium text-amber-800">
                  Important: For every payment, please ensure the narration is set to <strong>PACMACK</strong>.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Donation;