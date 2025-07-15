import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 3.33301L12.6667 7.99967L8 12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const offeringsData = [
  {
    imgSrc: "/src/assets/images/offering-1.png",
    altText: "Trending Categories",
    title: "Trending Categories",
    description: "Discover the latest in educational trends and topics.",
  },
  {
    imgSrc: "/src/assets/images/offering-2.png",
    altText: "How Our Platform Works",
    title: "How It Works",
    description: "Our simple three-step process makes learning easy.",
  },
  {
    imgSrc: "/src/assets/images/offering-3.png",
    altText: "Start Your Learning Journey",
    title: "Start Your Journey",
    description: "Sign up today to unlock your full potential.",
  },
];

const OfferingsSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#FFEAE3] text-[#E5593F] text-sm font-semibold px-4 py-1 rounded-full">
            Our Offerings
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-sora text-gray-900 tracking-tight">
            Explore Our Top Educational Offerings
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-inter">
            Dive into our curated selection of featured courses designed to enhance your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 w-full mb-16">
          {offeringsData.map((offering, index) => (
            <div key={index} className="group text-center">
              <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={offering.imgSrc}
                  alt={offering.altText}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold font-sora text-gray-900">{offering.title}</h3>
              <p className="mt-2 text-base text-gray-600 font-inter">{offering.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={()=> navigate('/courses')} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </Button>
          <Button className="group w-full sm:w-auto flex items-center justify-center gap-2 font-semibold text-gray-800 hover:text-[#FF6347] py-3 px-6 transition-colors duration-200">
            Learn More
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;