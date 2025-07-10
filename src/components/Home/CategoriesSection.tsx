import React from 'react';

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="16" height="16" viewBox="0 0 16 16" 
    fill="none" xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-hidden="true" 
  >
    <path 
      d="M3.33301 8H12.6663" 
      stroke="currentColor" 
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
    />
    <path 
      d="M8 3.33301L12.6667 7.99967L8 12.6663" 
      stroke="currentColor" 
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

const categoriesData = [
  {
    imgSrc: "/src/assets/images/category-1.png",
    altText: "Trending Topics",
    title: "Trending Topics to Enhance Your Learning",
    description: "Stay ahead in your education with our curated trending categories.",
    linkText: "Explore",
    href: "#",
  },
  {
    imgSrc: "/src/assets/images/category-2.png",
    altText: "Science and Technology",
    title: "Best Courses in Science & Technology",
    description: "Dive into our top categories to fuel your curiosity and growth.",
    linkText: "Browse",
    href: "#",
  },
  {
    imgSrc: "/src/assets/images/category-3.png",
    altText: "Arts and Humanities",
    title: "Courses in Arts and Humanities",
    description: "Explore creative subjects that inspire and challenge your thinking.",
    linkText: "Learn",
    href: "#",
  },
];


const CategoriesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-24">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-gray-900 tracking-tight">
            Explore Popular Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-inter">
            Curated selections of our most popular fields of study, tailored for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img 
                  src={category.imgSrc} 
                  alt={category.altText} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold font-sora text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 font-inter flex-grow mb-6">
                  {category.description}
                </p>
                <a 
                  href={category.href} 
                  className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-[#FF6347] hover:text-[#E5593F] transition-colors"
                >
                  {category.linkText}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;