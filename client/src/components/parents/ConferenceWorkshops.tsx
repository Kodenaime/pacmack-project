import React from 'react';
import { FiTool } from 'react-icons/fi';

interface Workshop {
  id: number;
  category: string;
  title: string;
  about: string;
  facilitator: string;
}

const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    category: 'Transition & Family Life',
    title: 'Preparing Families for Going & Returning',
    about: 'Departure and re-entry are two of the most disorienting seasons a missionary family faces. This workshop equips families with rituals and practical tools to navigate both the journey out and the journey home - emotionally, relationally, and practically.',
    facilitator: 'Mindy Beetham',
  },
  {
    id: 2,
    category: 'Transition & Family Life',
    title: 'Managing Family vs Ministry Demands',
    about: 'Ministry pressure is real - and so is the cost of family life. This workshop addresses parental presence, the unique weight young mothers carry in ministry, and how to protect what matters most without guilt.',
    facilitator: 'Joanna Bogunjoko',
  },
  {
    id: 3,
    category: 'Transition & Family Life',
    title: 'Education on the Field',
    about: 'There is no one-size-fits-all approach to educating MKs. This workshop walks families through the educational options and models available - and how to discern what works for their context, child, and calling.',
    facilitator: 'John Barclay & Dupe Kash',
  },
  {
    id: 4,
    category: 'Transition & Family Life',
    title: 'Financial Stewardship for Missionary Families',
    about: 'Money conversations matter on the mission field. This workshop provides practical tools for budgeting, support-raising, and financial planning designed for the realities of missionary life.',
    facilitator: 'Tolu Oladipo',
  },
  {
    id: 5,
    category: 'Child & MK Development',
    title: 'Helping Children Navigate Identity & Belonging',
    about: 'For children raised between cultures, who am I and where do I belong are daily realities. This workshop gives parents tools to understand TCK identity formation and create home environments that anchor children - even amid constant change.',
    facilitator: 'George Gumah',
  },
  {
    id: 7,
    category: 'Child & MK Development',
    title: 'Rooted and Roaming',
    about: 'Rooted and Roaming: Frequent moves don\'t have to mean a fractured self. This workshop helps parents nurture a stable, Christ-centered identity in their children - one that holds firm across cultures and transitions.',
    facilitator: 'Diti Olawole',
  },
  {
    id: 8,
    category: 'Child & MK Development',
    title: 'Building Resilient Kids',
    about: 'Resilience is not the absence of struggle - it\'s learning to move through it. This workshop helps parents balance grit and grace, raising emotionally strong children without minimising the real weight of their experiences.',
    facilitator: 'Roli Samkpulu',
  },
  {
    id: 9,
    category: 'Child & MK Development',
    title: 'The Gift of the TCK Story',
    about: 'Every TCK carries a story worth telling. This workshop helps children own, process, and share their cross-cultural journey - not as a wound, but as a source of strength, identity, and purpose.',
    facilitator: 'Mindy Beetham',
  },
  {
    id: 10,
    category: 'Child & MK Development',
    title: 'Raising World Changers',
    about: 'Your MK\'s upbringing is not a limitation - it\'s a launching pad. This workshop invites parents to dream with their children about their God-given future, exploring vocation, calling, and the gifts hidden in a cross-cultural childhood.',
    facilitator: 'David Ogunsola',
  },
  {
    id: 12,
    category: 'Faith & Spiritual Formation',
    title: 'When Your Child Questions Everything & When MKs Go Prodigal',
    about: 'Doubt and deconstruction look different in a TCK. This workshop offers a grace-filled approach to faith formation for children whose cross-cultural experiences have shaped how they encounter God and the Church. It also addresses rebellion and behavioural deviation in MKs - covering early red flags, the emotional landscape parents navigate, and how to love practically when the relationship is strained.',
    facilitator: 'Mr. Oladipo',
  },
  {
    id: 13,
    category: 'Faith & Spiritual Formation',
    title: 'All Work Is Sacred',
    about: 'Ministry is not a hierarchy. This workshop helps missionary families dismantle the sacred/secular divide, affirming that every vocation pursued faithfully is an act of worship.',
    facilitator: 'Ode Agabi',
  },
  {
    id: 14,
    category: 'Wellbeing & Care',
    title: 'Recognising Trauma in Your MK',
    about: 'Not every wound is visible. This workshop helps parents identify signs of trauma in missionary kids, respond with grace rather than fear, and lean into the healing power of Christian community.',
    facilitator: 'Patience Ahmed',
  },
  {
    id: 15,
    category: 'Wellbeing & Care',
    title: 'When to Seek Help',
    about: 'Asking for help is not a failure of faith. This workshop destigmatises mental health care for missionary families and helps parents navigate available resources - from the field, in transition, and beyond.',
    facilitator: 'Patience Ahmed',
  },
  {
    id: 17,
    category: 'Wellbeing & Care',
    title: 'Who Pastors the Missionary Parent?',
    about: 'Behind every struggling MK is often a parent carrying weight in silence. This workshop asks who cares for the caregiver - and equips churches, mission organisations, and communities to build pastoral presence and sustained, grace-rooted support around both troubled MKs and the parents who love them.',
    facilitator: 'Dupe Kashimawo & Mindy Beetham',
  },
  {
    id: 18,
    category: 'Adult TCKs',
    title: 'Supporting Adult/Independent TCKs',
    about: 'What happens when TCKs grow up? This workshop explores how cross-cultural childhood experiences show up in adulthood and how families and communities can offer meaningful, timely support.',
    facilitator: 'Mr. Oladipo',
  },
  {
    id: 19,
    category: 'Safety & Digital Life',
    title: 'Child Protection: At Home and Away from Home',
    about: 'Safeguarding children is a non-negotiable - wherever you serve. This workshop equips families with awareness, language, and practical frameworks to protect their children both on the field and during transitions.',
    facilitator: 'Tolu Oladipo',
  },
  {
    id: 20,
    category: 'Safety & Digital Life',
    title: 'Parenting in an AI-Driven and Social Media World',
    about: 'AI and social media are shaping how children see themselves and the world. This workshop equips cross-cultural parents with practical frameworks for healthy technology boundaries and intentional digital discipleship.',
    facilitator: 'Mishael WAMO',
  }
];

import { Link } from 'react-router';

interface ConferenceWorkshopsProps {
  limit?: number;
}

const ConferenceWorkshops: React.FC<ConferenceWorkshopsProps> = ({ limit }) => {
  const displayedWorkshops = limit ? WORKSHOPS.slice(0, limit) : WORKSHOPS;

  return (
    <section className="py-20 bg-brand-bg" id="workshops">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Conference Workshops</h2>
          <p className="text-brand-text max-w-2xl mx-auto text-base md:text-lg">
            Hands-on workshops designed to give parents practical tools for everyday missionary family life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="flex flex-col bg-white rounded-3xl shadow-soft border border-brand-gray/20 p-8 hover:shadow-medium transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                  <FiTool size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-brand-text">
                  {workshop.category}
                </span>
              </div>
              <h3 className="text-lg font-black text-brand-black mb-3 leading-snug">{workshop.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed grow mb-4">{workshop.about}</p>
              
              <div className="pt-4 border-t border-brand-gray/10 mt-auto">
                <span className="text-xs font-bold text-brand-text uppercase tracking-wider block">
                  Facilitator
                </span>
                <span className="text-sm font-bold text-primary block mt-0.5">
                  {workshop.facilitator}
                </span>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              to="/conference-details"
              className="inline-block bg-primary text-brand-black font-black uppercase tracking-widest text-xs px-8 py-4 transition-smooth hover:bg-brand-black hover:text-white shadow-md"
            >
              View Full Plenary & Workshop list
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConferenceWorkshops;
