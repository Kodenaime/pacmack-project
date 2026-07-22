import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ParentsConferenceTeam from '../components/parents/ParentsConferenceTeam';

const ParentsConference2026: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 relative overflow-hidden">
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
            <p className="text-[16px]">
              Missionary Kids and Third Culture Kids are a global phenomenon that is a reality for the children of African Cross-cultural missionaries and pastors.
            </p>
            <p className="text-[16px]">
              The children of these workers come away with many cultural colors, rooted and uprooted as often as mission service moves the family around. They are impacted in ways that most parents do not understand.
            </p>
            {/* Fixed: Border and background colors map perfectly to Goal layout rules */}
            <p className="font-bold border-l-4 border-primary pl-4 italic bg-primary-light rounded-r-lg text-[16px] p-4">
              PACMACK parents conference is the place for parents, MK caregivers, and mission leaders to gain a deeper understanding of MKs and TCKs and to find resources to support and care for them.
            </p>
          </div>
        </section>

        {/* Why/Gap Two-Column Layout */}
        <section className="py-20 bg-brand-bg">
          <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-brand-white p-8 md:p-12 border border-brand-gray/10 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black mb-6 border-b-4 border-black pb-2">
                Why a Conference for Parents of TCKs?
              </h2>
              <div className="text-brand-text space-y-4 leading-relaxed text-[16px]">
                <p>African missionary parents love their children deeply. But love alone is not enough.</p>
                <p>After PACMACK's 2025 conference for MKs and TCKs, one truth stood out above all others: the families sending Africa's missionaries to the field are largely on their own — unequipped, unsupported, and unseen.</p>
              </div>
            </div>

            <div className="bg-brand-white p-8 md:p-12 border border-brand-gray/10 shadow-soft">
              {/* Fixed: Swapped custom orange layout token for system primary tracking */}
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-brand-black mb-6 border-b-4 border-primary pb-2">
                The Gap Nobody Is Talking About
              </h2>
              <div className="text-brand-text space-y-4 leading-relaxed text-[16px]">
                <p>Missionary member care was not designed with African families in mind.</p>
                <p>Parents are raising children in high-risk, high-stress environments — navigating trauma, grief, identity crises, and educational instability — with no training, no safety net, and no community that truly understands. They are in survival mode. And without meaning to, the weight they carry is being transferred to their children.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Consequences Block */}
        <section className="py-16 bg-brand-white">
          <div className="container-lg max-w-4xl text-brand-black/80 space-y-6 leading-relaxed">
            <p className="text-[16px]">
              The consequences are real: identity struggles, broken family relationships, children who walk away from faith — and missionaries who leave the field not because the calling faded, but because family pain became unbearable.
            </p>
            <p className="text-[16px]">
              Unlike missionary families in the Global North, many African TCKs did not grow up watching generations before them embrace cross-cultural service. There is no inherited framework. No roadmap. And too often, no one telling parents: this is normal — and there is help.
            </p>
            <p className="font-black text-xl text-black uppercase tracking-tight pt-4">
              This Conference Exists to Change That
            </p>
            <p className="text-[16px]">
              The 2026 PACMACK Parents Conference is a dedicated space for African missionary parents to be equipped, encouraged, and seen.
            </p>
            <p className="text-[16px]">
              Many parents have never heard the term "Third Culture Kid." Many do not understand why their child seems caught between worlds — or why the very thing they gave up so much for is producing conflict, distance, and pain at home. This conference addresses that — directly, practically, and without shame.
            </p>
          </div>
        </section>

        {/* What We're Here to Do - Grid */}
        <section className="py-20 bg-brand-bg">
          <div className="container-lg">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">
              What We're Here to Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Encourage", text: "You are not failing. What you are experiencing is part of raising a TCK. We create space for parents to speak honestly, share their stories, and break the isolation that too many carry alone." },
                { title: "Equip", text: "From TCK grief and trauma to identity, mental health, deconstruction, and education options in African contexts — parents leave with real tools, not just inspiration." },
                { title: "Prevent Harm", text: "Unprepared responses cause unintended damage. We help parents recognise the patterns — and interrupt them before they take root." },
                { title: "Reduce Attrition", text: "Family hardship is the leading reason missionaries leave the field. We are committed to helping parents stay — not by minimising the struggle, but by walking through it together." },
                { title: "Raise Resilient Children", text: "Children who know who they are do not need to reject their faith or their calling to find themselves. We help parents raise TCKs who are grounded, whole, and free to choose." }
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

        {/* Triggers Questions Section */}
        <section className="py-20 bg-brand-white">
          <div className="container-lg max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-10 text-center md:text-left">
              The Conference will address issues such as:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "What do I do when my child starts questioning everything — their faith, their identity, their place in the world?",
                "Could my child be carrying heart wounds I haven't noticed?",
                "What do I do when my MK seems lost, rebellious, or has walked away altogether?",
                "How do I protect my child from harm — spiritual, emotional, physical — in spaces that should be safe? Etc."
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
        <ParentsConferenceTeam />
      </main>

      <Footer />
    </div>
  );
};

export default ParentsConference2026;