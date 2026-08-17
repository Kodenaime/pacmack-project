import React, { useState } from 'react';
import { FiGift, FiX } from "react-icons/fi";

const ConferenceDonation: React.FC = () => {
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
              <h2 className="text-3xl md:text-4xl font-black uppercase">Support PACMACK 2026</h2>
              <p className="text-lg md:text-xl font-semibold leading-relaxed">
                Your partnership helps us sponsor missionary parents and cover crucial conference costs. SOW into the lives of TCKs/MKs today.
              </p>
              
              <button 
                className="flex items-center gap-2 bg-primary text-brand-black px-8 py-3 rounded-lg font-black uppercase tracking-wider transition-smooth hover:scale-105 active:scale-95 cursor-pointer"
                onClick={toggleModal}
              >
                <FiGift className="text-xl" /> Sponser / Donate
              </button>
            </div>
          </div>
        </div>

        {/* Donation Details Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <div className="bg-white text-brand-black w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-deep p-8 md:p-10 animate-in fade-in zoom-in duration-300">
              
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-2 text-2xl text-brand-text hover:text-brand-black transition-smooth cursor-pointer" 
                onClick={toggleModal}
              >
                <FiX />
              </button>
              
              <div>
                <h3 className="text-2xl font-black text-primary mb-6 border-b pb-2 uppercase tracking-tight">Sponsorship & Donations</h3>
                
                {/* Custom Story Copy */}
                <div className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6 space-y-4 font-medium">
                  <p className="font-bold text-brand-black text-lg">
                    PACMACK 2026 seeks to educate, encourage and equip missionary parents to raise their children as a trust from God to be nurtured.
                  </p>
                  <p>
                    Because African Missionaries are generally poorly supported, travel cost and conference cost presents a significant barrier. To lower this barrier we invite you to partner with us by financially sponsoring a participant or couple to the conference at full cost <strong>$250 USD</strong> or partial scholarship to the minimum of approximately <strong>$50 USD</strong>. You can also give generally to the conference budget of <strong>$39,000 USD</strong> to enable us run the conference and to provide scholarships for intending participants (150 expected).
                  </p>
                </div>

                {/* Why support PACMACK bullets */}
                <div className="bg-amber-50 p-6 rounded-2xl mb-8 border-l-4 border-primary">
                  <h4 className="text-lg font-bold text-brand-black mb-3">Why support PACMACK?</h4>
                  <ul className="space-y-2 text-sm md:text-base text-neutral-800 font-semibold">
                    <li>• Empower MKs/PKs to thrive in faith and vocation.</li>
                    <li>• Bridge financial gaps for community participants.</li>
                    <li>• Validate the importance of MK care within African missions.</li>
                  </ul>
                </div>

                <div className="border-t border-brand-gray/10 pt-6">
                  <p className="font-bold text-brand-black mb-4">You can give through the following bank details:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dollar Account */}
                    <div className="bg-brand-bg p-5 rounded-2xl border border-brand-gray/20">
                      <h5 className="font-black text-primary uppercase text-sm tracking-wider mb-3">DOLLAR ACCOUNT</h5>
                      <div className="text-sm space-y-1.5 text-neutral-800 font-semibold">
                        <p><span className="text-brand-text">Account Name:</span> Calvary Ministries (CAPRO)</p>
                        <p><span className="text-brand-text">Bank:</span> Zenith Bank</p>
                        <p><span className="text-brand-text">Address:</span> Head Office Branch, Plot 84 Ajose Adeogun Street, Victoria Island, Lagos, Nigeria</p>
                        <p><span className="text-brand-text">Sort Code:</span> 057150013</p>
                        <p><span className="text-brand-text">USD Account No:</span> 5070002624</p>
                        <p><span className="text-brand-text">Swift Code:</span> ZEIBNGLA</p>
                        <p><span className="text-brand-text">Narration/Purpose:</span> PACMACK</p>
                      </div>
                    </div>

                    {/* Naira Account */}
                    <div className="bg-brand-bg p-5 rounded-2xl border border-brand-gray/20">
                      <h5 className="font-black text-primary uppercase text-sm tracking-wider mb-3">NAIRA ACCOUNT</h5>
                      <div className="text-sm space-y-1.5 text-neutral-800 font-semibold">
                        <p><span className="text-brand-text">Account Name:</span> Calvary Ministries</p>
                        <p><span className="text-brand-text">Bank:</span> Zenith Bank</p>
                        <p><span className="text-brand-text">Account Number:</span> 1011864528</p>
                        <p><span className="text-brand-text">Narration/Purpose:</span> PACMACK</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-neutral-100 rounded-xl text-xs md:text-sm text-neutral-600 font-semibold leading-relaxed">
                  <p className="mb-2 italic">
                    (Please contact us with details of donations and transfers name, amount and date on <a href="mailto:caproiofin@swissmail.org" className="text-primary underline">caproiofin@swissmail.org</a> copy <a href="mailto:pacmack1.0@gmail.com" className="text-primary underline">pacmack1.0@gmail.com</a> so that we can trace and acknowledge it).
                  </p>
                  <p className="mt-4 text-neutral-700">
                    African missionary families are known for their doggedness, zeal and sacrifice in obeying the great commission. We seek a multi-generational African global Gospel impact through emotionally healthy MKs /TCKs rooted in their faith.
                  </p>
                  <p className="mt-4 font-bold text-brand-black">
                    Thanks for your kind consideration and partnership.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConferenceDonation;
