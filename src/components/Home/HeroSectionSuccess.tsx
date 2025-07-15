import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import heroImage1 from '@/assets/images/hero-image-1.png';
import heroImage2 from '@/assets/images/hero-image-2.png';
import heroImage3 from '@/assets/images/hero-image-3.png';
import heroImage4 from '@/assets/images/hero-image-4.png';
import heroImage5 from '@/assets/images/hero-image-5.png';
import heroImage6 from '@/assets/images/hero-image-6.png';

const HeroSectionSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0 shadow-sm">
              <Sparkles className="w-4 h-4" />
              AI-Powered Learning
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight tracking-tight">
              Discover Your Path to 
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Learning Success</span>
            </h1>
            
            <p className="max-w-xl text-lg text-gray-600 leading-relaxed mx-auto lg:mx-0">
              Unlock a world of knowledge with our AI-powered search. Find the perfect educational resources tailored just for you.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>10,000+ Resources</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>98% Success Rate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Button size="lg" onClick={()=> {navigate('/courses')}} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 pt-10">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img
                    src={heroImage1}
                    alt="People collaborating"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 delay-75">
                  <img
                    src={heroImage2}
                    alt="Woman studying"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 delay-150">
                  <img
                    src={heroImage3}
                    alt="Working on laptop"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 delay-75">
                  <img
                    src={heroImage4}
                    alt="Relaxing with laptop"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 delay-150">
                  <img
                    src={heroImage5}
                    alt="Friendly discussion"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 delay-225">
                  <img
                    src={heroImage6}
                    alt="Outdoor cafe chat"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg animate-bounce delay-500 opacity-80"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionSuccess;