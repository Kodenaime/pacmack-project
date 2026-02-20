import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const communityFaqs: FaqItem[] = [
  { 
    id: 1, 
    question: "What is the PACMACK Community?",
    answer: "PACMACK has evolved from an annual conference into a permanent support network for Missionary Kids (MKs) and children of cross-cultural workers across Africa, providing resources, connection, and mentorship."
  },
  { 
    id: 2,
    question: "How can I join the PACMACK community?",
    answer: "You can join by clicking the 'Join Us' button in the header. Membership is open to MKs, PKs, and TCKs aged 16 and older, as well as parents and member care professionals."
  },
  { 
    id: 3,
    question: "Can I still access the 2025 Conference materials?",
    answer: "Yes! All plenary sessions, workshop notes, and devotions from the October 2025 conference are available in our Resource Library for registered community members."
  },
  { 
    id: 4,
    question: "Is there a fee to be part of the community?",
    answer: "General membership and access to many of our community forums are free. Some specialized resource tracks or future physical events may have associated costs."
  },
  { 
    id: 5,
    question: "When is the next physical conference?",
    answer: "While we are currently focusing on building our digital community and resource base, stay tuned to our 'Events' section and social media for announcements regarding PACMACK 2026."
  },
  { 
    id: 6,
    question: "How else can I support the vision?",
    answer: "You can support us through prayer, donating MK/TCK resources (books, curriculum), offering professional expertise as a mentor, or through financial donations to sustain our digital platforms."
  }
];

const Faqs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg" id="faqs">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Common Questions</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Everything you need to know about joining our growing community and accessing our resources.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {communityFaqs.map((faq) => (
            <FaqCard key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal Sub-component for better state management
const FaqCard: React.FC<FaqItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-brand-white rounded-xl border border-brand-gray/20 overflow-hidden transition-smooth hover:shadow-soft"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5 md:p-6 flex justify-between items-center cursor-pointer">
        <h4 className="text-lg font-semibold text-brand-black pr-4">{question}</h4>
        <button className="text-primary text-xl shrink-0">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      
      <div className={`
        px-6 transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <p className="text-brand-text leading-relaxed border-t border-brand-gray/10 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faqs;