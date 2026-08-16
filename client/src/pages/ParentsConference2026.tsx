import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ParentsConferenceTeam from '../components/parents/ParentsConferenceTeam';
import ConferenceSpeakers from '../components/parents/ConferenceSpeakers';
import PlenaryTopics from '../components/parents/PlenaryTopics';
import ConferenceWorkshops from '../components/parents/ConferenceWorkshops';

const ParentsConference2026: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="grow ">
        {/* Hero Section */}
        <section className="bg-black text-white pt-32 py-20 relative overflow-hidden">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
              {/* Left Text Block */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Fixed: Replaced hardcoded orange with your primary theme layout tokens */}
                <span className="text-primary font-black uppercase tracking-widest text-sm bg-primary-light/10 px-4 py-2 inline-block mb-6 rounded-md">
                  Oct 1st - 4th, 2026 | Abuja, Nigeria
                </span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Parents Conference <br />
                  <span className="text-primary">...Not The Sacrifice</span>
                </h1>
                <h3 className="text-lg md:text-xl text-gray-400 font-bold uppercase tracking-tight mb-6">
                  Nurturing MKs/TCKs as a Trust (Gen 22:1-18)
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
                  Missionary Kids and Third Culture Kids are a global phenomenon that is a reality for the children of African Cross-cultural missionaries and pastors. PACMACK parents conference is the place for parents, MK caregivers, and mission leaders to gain a deeper understanding.
                </p>
                <a
                  href="https://forms.gle/q8XRATaJV7CLmxqH9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-brand-black font-black uppercase tracking-widest px-10 py-4 shadow-xl transition-all hover:bg-white hover:text-black"
                >
                  Click here to register 👇🏾
                </a>
              </div>

              {/* Right Flyer Container Asset */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-sm w-full bg-[#1a1a1a] p-4 border border-white/10 shadow-2xl">
                  <img 
                    src="/2026flyer.jpeg" 
                    alt="Official PACMACK 2026 Parents Conference Theme Poster" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Introduction Context */}
        <section className="py-16 bg-brand-white border-b border-brand-gray/10">
          <div className="container-lg max-w-3xl text-lg text-brand-black/90 leading-relaxed space-y-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black mb-6 border-b-4 border-black pb-2">
              Why a Conference for Parents of TCKs?
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed text-[16px]">
                <p>African missionary parents love their children deeply. But love alone is not enough.</p>
                <p>After PACMACK's 2025 conference for MKs and TCKs, one truth stood out above all others: the families sending Africa's missionaries to the field are largely on their own, unequipped, unsupported, and unseen.</p>
              </div>
            <p className="font-bold border-l-4 border-primary pl-4 italic bg-primary-light rounded-r-lg text-[16px] p-4">
              PACMACK parents conference is the place for parents, MK caregivers, and mission leaders to gain a deeper understanding of MKs and TCKs and to find resources to support and care for them.
            </p>
          </div>
        </section>        
        
        <ConferenceSpeakers />
        <PlenaryTopics />
        <ConferenceWorkshops />
        <ParentsConferenceTeam />

        {/* What We're Here to Do */}
        <section className="py-20 bg-brand-bg">
          <div className="container-lg">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">
              What We're Here to Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Educate", text: "Deepen your understanding of MK/TCK identity and the lifelong impact of missionary life on children." },
                { title: "Equip", text: "Leave with practical tools for intentional care, empathy, listening, and meaningful connection at every stage of transition." },
                { title: "Share", text: "Find a safe space for African missionary parents to share challenges and triumphs with others who truly understand." },
                { title: "Understand", text: "Explore how generational differences shape communication and values within missionary families." },
                { title: "Address", text: "Confront trauma, transitions, and identity challenges while addressing the unique realities of African MKs and TCKs." },
                // { title: "Connect", text: "Build a supportive community through networking, shared stories, and connections to MK/TCK care resources." }
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-white p-8 shadow-soft border-t-4 border-black flex flex-col gap-4">
                  {/* Fixed: Component heading matches layout accenting strategy */}
                  <h3 className="text-xl font-black uppercase tracking-tight text-primary">{item.title}</h3>
                  <p className="text-brand-text leading-relaxed text-sm text-[16px]">{item.text}</p>
                </div>
              ))}
              <div className="bg-black text-white p-8 flex flex-col justify-center items-center text-center gap-4 md:col-span-2 lg:col-span-1">
                <p className="font-bold text-lg italic">A generation of African cross-cultural workers is possible. It starts with the families who raise them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trigger Questions Section */}
        <section className="py-20 bg-brand-white">
          <div className="container-lg">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-10 text-center md:text-left">
              The Conference will address issues such as:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                "What does it truly mean to obey God with my child on the altar, and not treat my family as the sacrifice?",
                "How do I recognise and nurture the unique identity of my MK/TCK child as they grow between cultures?",
                "What are the real challenges of the African missionary parent's call, and what should I heed along the way?",
                "How can my child become a world changer, not in spite of the challenges, but because of them?",
                "How do I raise my children well when ministry demands compete with family presence?",
                "How do I navigate departure and re-entry so my family moves through transition without falling apart?",
                "What educational options fit my child's context, and how do I choose well on the field?",
                "How do I nurture a stable, Christ-centered identity in my child when we move often?"
              ].map((q, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-brand-bg rounded-none border-l-4 border-black">
                  {/* Fixed: Icon maps to master styling token */}
                  <FiHelpCircle className="text-primary shrink-0 mt-1" size={20} />
                  <p className="font-medium text-brand-black text-[16px]">{q}</p>
                </div>
              ))}
            </div>
            
            {/* Fixed: Outer tracking layout matches standard container utilities */}
            <div className="mt-16 text-center bg-primary-light rounded-lg p-8 border-2 border-dashed border-primary">
              <p className="text-xl font-black uppercase tracking-tight text-brand-black mb-4">
                Come find the language, tools, resources, and a community that cares.
              </p>
              <a 
                href="https://forms.gle/q8XRATaJV7CLmxqH9" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-brand-black transition-colors"
              >
                Register For The Conference
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParentsConference2026;