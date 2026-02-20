import React from 'react';

// Asset Imports
import sponsor1 from '../../assets/capro-logo.png';
import sponsor2 from '../../assets/interaction-logo.jfif';
import itckc from '../../assets/itckc.jpeg';
import gema from '../../assets/gem.png';
import nema from '../../assets/nema-logo.jfif';
import wolde from '../../assets/wolde.jpeg';
import care from '../../assets/greatcare.jpeg';
import africa from '../../assets/africa.jfif';
import cmf from '../../assets/cmf.jfif';
import missions from '../../assets/missions.jpg';
import philhos from '../../assets/philhos.jpeg';
import phoenix from '../../assets/phoenix.png';

const Sponsors: React.FC = () => {
  const partners = [
    { name: "Calvary Ministries (CAPRO)", logo: sponsor1, url: "https://capromissions.org/" },
    { name: "Interaction International", logo: sponsor2, url: "https://interactionintl.org/" },
    { name: "ITCKC Shepherd Council", logo: itckc, url: "https://itckc.global/" },
    { name: "Ghana Evangelical Mission Association", logo: gema, url: "https://gemagh.org/" },
    { name: "Nigeria Evangelical Mission Association", logo: nema, url: "https://nemanigeriamissions.org/departments/" },
    { name: "Woldena Africa", logo: wolde, url: "" },
    { name: "Great Commission Support Kenya", logo: care, url: "" },
    { name: "Africa Member Care Network", logo: africa, url: "https://linkingglobalvoices.com/networks-listing/networks-view?tx_genmobile_sites%5Baction%5D=show&tx_genmobile_sites%5Bcontroller%5D=Site&tx_genmobile_sites%5Bsite%5D=1264&cHash=e0d018d5c91f5fa3b266cc11f646b21f" },
    { name: "Christian Missionary Fund", logo: cmf, url: "https://www.christianmissionaryfund.org/" },
    { name: "Mission Enablers", logo: missions, url: "https://meafrica.org/" },
    { name: "PHILHOS", logo: philhos, url: "https://amtb.org.br/philhos/" },
    { name: "Understanding MK's to Foster Flourishing", logo: phoenix, url: "https://michelephoenix.com/" },
  ];

  return (
    <section className="py-16 bg-brand-white" id="sponsors">
      <div className="container-lg">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Endorsements, Sponsors & Partners
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Grateful for the individuals, Churches, and organizations partnering with the PACMACK community.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center max-w-[140px] md:max-w-[180px] group">
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              {partner.url ? (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-bold text-brand-black text-center hover:text-primary transition-smooth"
                >
                  {partner.name}
                </a>
              ) : (
                <span className="text-xs md:text-sm font-bold text-brand-black text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;