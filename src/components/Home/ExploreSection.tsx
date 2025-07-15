import React, { useState, useEffect, useMemo } from 'react';
import CourseList from '../Course/CourseList';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';
import { getCourses } from '@/api/course';
import { getCategories } from '@/api/category';

const ITEMS_PER_PAGE = 8;

const ExploreSection: React.FC = () => {
    const [activeFilter, ] = useState('View All');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, ] = useState('');
    const [priceFilter, ] = useState('all');
    const [sortOrder, ] = useState('default'); 
    const [courses, setCourses] = useState<Course[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [initialDataError, setInitialDataError] = useState<string | null>(null);

    const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

      const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const [coursesData, categoriesData] = await Promise.all([
          getCourses(),
          getCategories(),
        ]);
        setCourses(coursesData);
        setCategories(categoriesData);
        setInitialDataError(null);
      } catch (error) {
        console.error('Failed to fetch initial data:', error);
        setInitialDataError('Failed to load course data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
  useEffect(() => {
    fetchInitialData();
  }, []);

    const filteredCourses = useMemo(() => {
      let filtered = activeFilter === 'View All'
        ? courses
        : courses.filter(course => course.category === categories.find(cat => cat.name === activeFilter)?.id);
  
      filtered = filtered.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
  
        let matchesPrice = true;
        switch (priceFilter) {
          case 'under500k':
            matchesPrice = course.price < 500000;
            break;
          case '500kto1m':
            matchesPrice = course.price >= 500000 && course.price <= 1000000;
            break;
          case 'over1m':
            matchesPrice = course.price > 1000000;
            break;
          default:
            matchesPrice = true;
            break;
        }
  
        return matchesSearch && matchesPrice;
      });
  
      if (sortOrder === 'price_asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === 'price_desc') {
        filtered.sort((a, b) => b.price - a.price);
      }
  
      return filtered;
    }, [activeFilter, searchTerm, priceFilter, sortOrder, courses, categories]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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

        <CourseList
          courses={currentCourses}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          categories={categories}
          formatPrice={formatPrice}
          isLoading={isLoading}
        />
        {initialDataError && (
          <div className="text-center text-red-500 mt-8">
            <p>{initialDataError}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ExploreSection;