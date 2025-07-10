import React from 'react';
import { Button } from '@/components/ui/button';

import heroImage1 from '@/assets/images/hero-image-1.png';
import heroImage2 from '@/assets/images/hero-image-2.png';
import heroImage3 from '@/assets/images/hero-image-3.png';
import heroImage4 from '@/assets/images/hero-image-4.png';
import heroImage5 from '@/assets/images/hero-image-5.png';
import heroImage6 from '@/assets/images/hero-image-6.png';

const HeroSectionSuccess: React.FC = () => {
  return (
    <section className="bg-white w-full">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter">
              Discover Your Path to Learning Success
            </h1>
            <p className="max-w-lg text-lg text-gray-600 leading-relaxed mx-auto lg:mx-0">
              Unlock a world of knowledge with our AI-powered search. Find the perfect educational resources tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#FF6347] hover:bg-orange-600 text-white transition-colors">
                Explore
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 lg:pt-24">
              <img src={heroImage1} alt="People collaborating with a tablet" className="rounded-lg object-cover w-full h-auto"/>
              <img src={heroImage2} alt="Woman studying on a laptop in a cozy chair" className="rounded-lg object-cover w-full h-auto"/>
              <img src={heroImage3} alt="Woman in a vest working on a laptop" className="rounded-lg object-cover w-full h-auto"/>
            </div>
            <div className="flex flex-col gap-4">
              <img src={heroImage4} alt="Person relaxing on a couch with a laptop" className="rounded-lg object-cover w-full h-auto"/>
              <img src={heroImage5} alt="Two people having a friendly discussion" className="rounded-lg object-cover w-full h-auto"/>
              <img src={heroImage6} alt="Two people talking in an outdoor cafe setting" className="rounded-lg object-cover w-full h-auto"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionSuccess;