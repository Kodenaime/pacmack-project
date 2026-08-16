import React from 'react';
import { FiTool } from 'react-icons/fi';

interface Workshop {
  id: number;
  title: string;
  about: string;
}

const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    title: 'Preparing families for transitions - Going and Returning',
    about: 'Departure and re-entry are two of the most disorienting seasons a missionary family faces. This workshop equips families with rituals and practical tools to navigate both the journey out and the journey home, emotionally, relationally, and practically.',
  },
  {
    id: 2,
    title: 'Managing Family vs Ministry Demands',
    about: 'Ministry pressure is real, and so is the cost of family life. This workshop addresses parental presence, the unique weight young mothers carry in ministry, and how to protect what matters most without guilt.',
  },
  {
    id: 3,
    title: 'Education on the Field',
    about: 'There is no one-size-fits-all approach to educating MKs. This workshop walks families through the educational options and models available, and how to discern what works for their context, child, and calling.',
  },
  {
    id: 4,
    title: 'Financial Stewardship for Missionary Families',
    about: 'Money conversations matter on the mission field. This workshop provides practical tools for budgeting, support-raising, and financial planning designed for the realities of missionary life.',
  },
  {
    id: 5,
    title: 'Rooted and Roaming',
    about: 'Rooted and Roaming: Frequent moves do not have to mean a fractured self. This workshop helps parents nurture a stable, Christ-centered identity in their children, one that holds firm across cultures and transitions.',
  },
  {
    id: 6,
    title: 'Building Resilient Children',
    about: "Resilience is not the absence of struggle, it is learning to move through it. This workshop helps parents balance grit and grace, raising emotionally strong children without minimising the real weight of their experiences.",
  },
];

const ConferenceWorkshops: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg" id="workshops">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Conference Workshops</h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            Hands-on workshops designed to give parents practical tools for everyday missionary family life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((workshop) => (
            <div
              key={workshop.id}
              className="flex flex-col bg-white rounded-2xl shadow-soft border border-brand-gray/20 p-8 hover:shadow-medium transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                  <FiTool size={18} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text">
                  Workshop {String(workshop.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3 leading-snug">{workshop.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed grow">{workshop.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceWorkshops;
