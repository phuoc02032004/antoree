import React from 'react';
import exploreIcon from '@/assets/icons/explore.svg';
import recommendIcon from '@/assets/icons/step.svg'; 
import enrollIcon from '@/assets/icons/step.svg';   
import chevronRightIcon from '@/assets/icons/chevron_right.svg';

const stepsData = [
  {
    icon: exploreIcon,
    altText: 'Explore courses icon',
    title: 'Step 1: Explore a Wide Range of Courses',
    description: 'Browse through our extensive catalog to find what suits you best.',
    linkText: 'Browse',
    href: '#',
  },
  {
    icon: recommendIcon, 
    altText: 'Personalized recommendations icon',
    title: 'Step 2: Get Personalized Recommendations',
    description: 'Receive tailored suggestions based on your learning preferences and goals.',
    linkText: 'Discover',
    href: '#',
  },
  {
    icon: enrollIcon, 
    altText: 'Enroll and start learning icon',
    title: 'Step 3: Enroll and Start Learning',
    description: 'Join your chosen course and embark on your learning journey.',
    linkText: 'Enroll',
    href: '#',
  },
];

const DesignSection: React.FC = () => {
  return (
    <section className="bg-[#FFEFEC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <h2 className="text-4xl lg:text-5xl font-bold font-sora text-[#0D0B00] leading-tight tracking-tighter">
              Discover your personalized learning journey in three simple steps.
            </h2>
            <p className="text-lg font-inter text-[#0D0B00]/80 mt-2">
              At EduSphere AI, we make learning accessible and tailored to your needs. Our platform utilizes advanced AI technology to recommend courses that fit your interests and goals. Start your educational adventure today and unlock your potential!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stepsData.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="bg-[#FFDDD6] p-3 rounded-full w-14 h-14 inline-flex items-center justify-center mb-6">
                  <img src={step.icon} alt={step.altText} className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold font-sora text-[#0D0B00] mb-4">
                  {step.title}
                </h3>
                <p className="font-inter text-base text-[#0D0B00]/80 mb-6">
                  {step.description}
                </p>
                <a 
                  href={step.href} 
                  className="inline-flex items-center gap-2 font-medium font-inter text-[#0D0B00] mt-auto pt-4 group-hover:text-red-500 transition-colors"
                >
                  {step.linkText}
                  <img 
                    src={chevronRightIcon} 
                    alt="Arrow right" 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  />
                </a>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DesignSection;