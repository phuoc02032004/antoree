import React from 'react';
import { Button } from '../ui/button';
import heroImage from '/images/hero-image.png';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      ></div>

      <div className=" relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="p-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-medium text-orange-600 border border-orange-200">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Learning Platform
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-900 leading-tight">
                Discover Your Path to{' '}
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Learning with AI
                </span>
              </h1>
              
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 mx-auto lg:mx-0 leading-relaxed">
                Unlock a world of educational opportunities tailored just for you. Our AI-powered search makes finding the right courses and materials effortless and engaging.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Button size="lg" onClick={()=>{navigate('/courses')}} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Exploring
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">AI Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
              
              <div className="relative">
                <img
                  src={heroImage}
                  width="1200"
                  height="675"
                  alt="Person at a table using a laptop, browsing an educational or e-commerce website."
                  className="relative rounded-2xl object-cover shadow-2xl shadow-gray-900/20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-3xl max-w-full h-auto"
                />
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;