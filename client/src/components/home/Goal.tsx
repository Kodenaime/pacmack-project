import React from 'react';
import goalImg from '../../assets/goal.webp';

const Goal: React.FC = () => {
  return (
    <section className="py-20 bg-brand-white" id="goal">
      {/* Using your custom container utility from index.css */}
      <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black leading-tight">
            A Community Africa Had Been Waiting For
          </h1>
          
          <div className="space-y-6 text-brand-black/80 text-lg leading-relaxed">
            <p className='text-[16px]'>
              PACMACK was born from a need that had long existed across Africa: a place where Missionary Kids (MKs) and children of cross-cultural Christian workers could find community, belonging, and understanding among people who shared similar life experiences.
            </p>

            <p className='text-[16px]'>
              More than a conference, <strong className="text-brand-black">PACMACK</strong> is a growing movement committed to strengthening MK care across the continent. It serves as a gathering point where meaningful relationships are formed, resources are shared, and individuals, families, churches, and organizations are equipped to better understand and support the unique journey of African MKs. The vision extends beyond a single event. <strong className="text-brand-black">PACMACK</strong> seeks to foster sustainable MK communities and intentional care networks throughout Africa, creating spaces where MKs are seen, supported, and empowered to flourish.
            </p>

            <p className='text-[16px]'>
              The inaugural conference, <strong className="text-brand-black">PACMACK 1.0</strong>, carried the theme <strong className="text-brand-black">Thrive</strong>. It challenged the idea that Missionary Kids should simply survive the complexities of cross-cultural life or learn to cope with its challenges. Instead, <em>Thrive</em> invited participants to embrace a fuller vision of life marked by wholeness, purpose, resilience, and hope.
            </p>

            <p className='text-[16px]'>
              Throughout the conference, African MKs were encouraged to understand their unique stories, recognize the value of their experiences, and discover the strengths that had been shaped through lives lived across cultures. Rather than viewing their backgrounds as something unusual to overcome, they were challenged to see them as a foundation for growth, leadership, and meaningful impact in the world around them.
            </p>

            <p className="p-4 border-l-4 border-primary bg-primary-light rounded-r-lg text-[16px]">
              As <strong className="text-brand-black">PACMACK</strong> continues to grow, its commitment remains the same: to cultivate a thriving community where African MKs are connected, cared for, equipped, and inspired to live out their calling with confidence.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 group">
          <div className="relative overflow-hidden rounded-2xl shadow-deep transition-smooth group-hover:shadow-soft">
            <img 
              src={goalImg} 
              alt="Thrive Goals" 
              className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
            />
            {/* Subtle Overlay Decoration */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Goal;