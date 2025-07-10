import React from 'react';
import { Button } from '../ui/button';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-28 px-16">
      <div className="relative mx-auto flex flex-col gap-20 px-24">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-[#0D0B00]">Customer Testimonials</h2>
          <p className="text-lg text-[#0D0B00] mt-6">EduSphere AI transformed my learning experience!</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F2F2F2] border border-[rgba(13,11,0,0.15)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1.25L12.5625 6.875L18.75 7.5L14.375 11.25L15.625 17.5L10 14.375L4.375 17.5L5.625 11.25L1.25 7.5L7.4375 6.875L10 1.25Z" fill="#0D0B00"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-[#0D0B00] mt-6">"The personalized recommendations made finding courses so easy!"</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img src="/src/assets/images/avatar-1.png" alt="Jane Doe" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-[#0D0B00]">Jane Doe</p>
                  <p className="text-[#0D0B00]">Student, University</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F2F2F2] border border-[rgba(13,11,0,0.15)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1.25L12.5625 6.875L18.75 7.5L14.375 11.25L15.625 17.5L10 14.375L4.375 17.5L5.625 11.25L1.25 7.5L7.4375 6.875L10 1.25Z" fill="#0D0B00"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-[#0D0B00] mt-6">"I found exactly what I needed for my classes!"</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img src="/src/assets/images/avatar-2.png" alt="John Smith" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-[#0D0B00]">John Smith</p>
                  <p className="text-[#0D0B00]">Teacher, High School</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F2F2F2] border border-[rgba(13,11,0,0.15)] p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1.25L12.5625 6.875L18.75 7.5L14.375 11.25L15.625 17.5L10 14.375L4.375 17.5L5.625 11.25L1.25 7.5L7.4375 6.875L10 1.25Z" fill="#0D0B00"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-[#0D0B00] mt-6">"The platform is user-friendly and efficient!"</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img src="/src/assets/images/avatar-3.png" alt="Emily Johnson" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-[#0D0B00]">Emily Johnson</p>
                  <p className="text-[#0D0B00]">Lifelong Learner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 bg-[#0D0B00] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#0D0B00] rounded-full opacity-20"></span>
              <span className="w-2.5 h-2.5 bg-[#0D0B00] rounded-full opacity-20"></span>
              <span className="w-2.5 h-2.5 bg-[#0D0B00] rounded-full opacity-20"></span>
              <span className="w-2.5 h-2.5 bg-[#0D0B00] rounded-full opacity-20"></span>
            </div>
            <div className="flex gap-4">
              <Button className="p-3 bg-[#F2F2F2] border border-[rgba(13,11,0,0.15)] rounded-full">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 10H4.16699" stroke="#0D0B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0003 15.8337L4.16699 10.0003L10.0003 4.16699" stroke="#0D0B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button className="p-3 bg-[#F2F2F2] border border-[rgba(13,11,0,0.15)] rounded-full">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16699 10H15.8337" stroke="#0D0B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0003 4.16699L15.8337 10.0003L10.0003 15.8337" stroke="#0D0B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;