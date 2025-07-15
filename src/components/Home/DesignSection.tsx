import React from 'react';
import exploreIcon from '@/assets/icons/explore.svg';
import recommendIcon from '@/assets/icons/step.svg'; 
import enrollIcon from '@/assets/icons/step.svg';   

const stepsData = [
  {
    icon: exploreIcon,
    altText: 'Explore courses icon',
    title: 'Step 1: Explore a Wide Range of Courses',
    description: 'Browse through our extensive catalog to find what suits you best.',
    linkText: 'Browse',
    href: '#',
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
    iconBg: 'bg-gradient-to-r from-blue-100 to-purple-100',
    hoverColor: 'group-hover:text-blue-600',
    number: '01'
  },
  {
    icon: recommendIcon, 
    altText: 'Personalized recommendations icon',
    title: 'Step 2: Get Personalized Recommendations',
    description: 'Receive tailored suggestions based on your learning preferences and goals.',
    linkText: 'Discover',
    href: '#',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    iconBg: 'bg-gradient-to-r from-orange-100 to-red-100',
    hoverColor: 'group-hover:text-orange-600',
    number: '02'
  },
  {
    icon: enrollIcon, 
    altText: 'Enroll and start learning icon',
    title: 'Step 3: Enroll and Start Learning',
    description: 'Join your chosen course and embark on your learning journey.',
    linkText: 'Enroll',
    href: '#',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    iconBg: 'bg-gradient-to-r from-green-100 to-emerald-100',
    hoverColor: 'group-hover:text-green-600',
    number: '03'
  },
];

const DesignSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br  overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2 animate-pulse"></span>
                  Your Learning Journey
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-sora text-gray-900 leading-tight tracking-tight">
                  Discover your{' '}
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    personalized learning
                  </span>{' '}
                  journey in three simple steps.
                </h2>
              </div>
              
              <div className="lg:pl-8">
                <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed">
                  At EduSphere AI, we make learning accessible and tailored to your needs. Our platform utilizes advanced AI technology to recommend courses that fit your interests and goals.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">10,000+ students already started</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {stepsData.map((step, index) => (
              <div key={index} className="relative group">
                {index < stepsData.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-10 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 opacity-50 z-0"></div>
                )}
                
                <div className={`relative flex flex-col bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out border border-white/50 hover:border-white/80 bg-gradient-to-br ${step.bgGradient} group-hover:scale-105`}>
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className={`relative ${step.iconBg} p-4 rounded-2xl w-16 h-16 inline-flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                    <img src={step.icon} alt={step.altText} className="relative w-8 h-8 z-10" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-sora text-gray-900 leading-tight group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="font-inter text-base sm:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200/50">
                    <a 
                      href={step.href} 
                      className={`inline-flex items-center gap-2 font-semibold font-inter text-gray-700 ${step.hoverColor} transition-all duration-300 hover:gap-3`}
                    >
                      <span className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        →
                      </span>
                      {step.linkText}
                    </a>
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="font-semibold text-lg mr-2">Start Your Journey Today</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DesignSection;