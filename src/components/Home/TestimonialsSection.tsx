import React from 'react';
import { Button } from '../ui/button'; 

const testimonialsData = [
  {
    id: 1,
    quote: "The personalized recommendations made finding courses so easy!",
    name: "Jane Doe",
    title: "Student, University",
    avatar: "/src/assets/images/avatar-1.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "I found exactly what I needed for my classes. A fantastic tool for educators!",
    name: "John Smith",
    title: "Teacher, High School",
    avatar: "/src/assets/images/avatar-2.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "As a lifelong learner, this platform is user-friendly, efficient, and truly inspiring.",
    name: "Emily Johnson",
    title: "Lifelong Learner",
    avatar: "/src/assets/images/avatar-3.png",
    rating: 5,
  },
];

const StarIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.25L12.5625 6.875L18.75 7.5L14.375 11.25L15.625 17.5L10 14.375L4.375 17.5L5.625 11.25L1.25 7.5L7.4375 6.875L10 1.25Z" fill="#FBBF24"/>
  </svg>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatar, rating }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <div className="flex gap-1 text-yellow-400">
          {Array(rating).fill(0).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-6 font-medium italic">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className=" mx-auto px-4 sm:px-6 lg:px-30">
        
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            EduSphere AI transformed my learning experience! Hear from our growing community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-12 lg:mt-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-2 bg-slate-800 rounded-full"></span>
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
            <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
          </div>
          
          <div className="flex gap-4">
            <Button
              aria-label="Previous testimonial"
              className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8337 10H4.16699" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0003 15.8337L4.16699 10.0003L10.0003 4.16699" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Button
              aria-label="Next testimonial"
              className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16699 10H15.8337" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0003 4.16699L15.8337 10.0003L10.0003 15.8337" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;