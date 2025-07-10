import React from 'react';
import { Button } from '../ui/button';
import heroImage from '../../assets/images/hero-image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 lg:py-36 overflow-hidden">
      
      <div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full opacity-10 sm:opacity-15 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="flex items-center justify-center">
             <img
              src={heroImage}
              width="1200"
              height="675"
              alt="Person at a table using a laptop, browsing an educational or e-commerce website."
              className="rounded-xl object-cover shadow-2xl shadow-gray-900/10 transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-6 text-center lg:text-left lg:items-start">
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Discover Your Path to <span className="text-[#FF6347]">Learning with AI</span>
            </h1>
            <p className="max-w-xl text-gray-600 md:text-xl dark:text-gray-300 mx-auto lg:mx-0">
              Unlock a world of educational opportunities tailored just for you. Our AI-powered search makes finding the right courses and materials effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-[#FF6347] hover:bg-orange-600 text-white shadow-lg shadow-[#FF6347]/40 hover:shadow-xl hover:shadow-orange-600/30 transition-all duration-300"
              >
                Start Exploring
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;