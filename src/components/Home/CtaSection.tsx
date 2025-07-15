import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const imageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop';

const CtaSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="container mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center shadow-2xl transition-all duration-500 ease-in-out hover:shadow-cyan-500/20 hover:scale-[1.02]"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>

          <div className="relative z-10 flex flex-col items-start p-8 text-white md:p-16 lg:p-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Start Your Learning Journey Today
              </h2>
              <p className="mt-4 text-lg text-gray-200 md:text-xl md:leading-relaxed">
                Discover a world of educational opportunities tailored just for you. Explore our diverse courses now!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                onClick={()=>navigate('/courses')}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Courses
                </Button>
                <Button
                  className="transform rounded-md border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-white/70"
                >
                  Join for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;