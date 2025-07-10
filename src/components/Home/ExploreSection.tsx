import React, { useState } from 'react';
import explore1 from '@/assets/images/explore-1.png';
import explore2 from '@/assets/images/explore-2.png';
import explore3 from '@/assets/images/explore-3.png';
import explore4 from '@/assets/images/explore-4.png';
import explore5 from '@/assets/images/explore-5.png';
import explore6 from '@/assets/images/explore-6.png';
import chevronRight from '@/assets/icons/chevron-right-black.svg';
import { Button } from '../ui/button';

const courses = [
  { imgSrc: explore1, tag: 'Courses', title: 'Top Tips for Online Learning', description: 'Discover effective strategies to enhance your online learning experience.' },
  { imgSrc: explore2, tag: 'Learning', title: 'Understanding AI in Education', description: 'Explore how AI is transforming the educational landscape.' },
  { imgSrc: explore3, tag: 'Technology', title: 'The Future of Learning', description: 'Insights into the evolving trends in educational technology.' },
  { imgSrc: explore4, tag: 'Education', title: 'Effective Study Techniques', description: 'Learn how to study smarter, not harder, for better results.' },
  { imgSrc: explore5, tag: 'Skills', title: 'Navigating Online Resources', description: 'Tips for finding the best online educational resources available.' },
  { imgSrc: explore6, tag: 'Guides', title: 'Mastering Time Management', description: 'Learn strategies to effectively manage your time while studying.' },
];

const filterButtons = ['View All', 'Web Development', 'Data Science', 'Graphic Design', 'Business Skills'];

const ExploreSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('View All');

  return (
    <section className="bg-gray-50 w-full py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="inline-block bg-[#FFEAE3] text-[#E5593F] text-sm font-semibold px-4 py-1 rounded-full">
            Our Courses
          </h2>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold font-sora text-gray-900 tracking-tight">
            Explore Our Featured Courses
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-inter">
            Curated selections based on popularity and user feedback.
          </p>
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-2 md:gap-4 mb-16">
          {filterButtons.map(filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF6347] focus:ring-opacity-50
                ${activeFilter === filter
                  ? 'bg-[#FF6347] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <div className="overflow-hidden">
                <img 
                  src={course.imgSrc} 
                  alt={course.title} 
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              <div className="p-6 text-left flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#FFEAE3] text-[#E5593F] text-xs font-bold px-3 py-1 rounded-full">
                    {course.tag}
                  </span>
                  <span className="text-sm text-gray-500 font-inter">5 min read</span>
                </div>
                <h3 className="text-xl font-bold font-sora text-gray-900">
                  {course.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 font-inter flex-grow">
                  {course.description}
                </p>
                <a href="#" className="mt-6 flex items-center text-base font-semibold text-[#FF6347] group-hover:text-[#E5593F] transition-colors duration-200">
                  Read more
                  <img 
                    src={chevronRight} 
                    alt="arrow" 
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreSection;