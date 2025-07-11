import React, { useState, useMemo, useEffect } from 'react';
import CourseFilter from '@/components/Course/CourseFilter';
import CourseList from '@/components/Course/CourseList';
import { getCourses } from '@/api/course';
import { getCategories } from '@/api/category';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';

const ITEMS_PER_PAGE = 6;

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('View All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('default'); 
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  }

  useEffect(()=> {
    fetchCourses();
    fetchCategories();
  }, [])

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

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
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="inline-block rounded-full bg-[#FFEAE3] px-4 py-1 text-sm font-semibold text-[#E5593F]">
            Our Courses
          </h2>
          <h1 className="font-sora mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Explore Our Featured Courses
          </h1>
          <p className="font-inter mt-4 text-lg text-gray-600">
            Curated selections based on popularity and user feedback.
          </p>
        </div>

        <div className="mb-8">
          <CourseFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            activeFilter={activeFilter}
            handleFilterClick={handleFilterClick}
            categories={categories}
          />
        </div>

        <CourseList
          courses={currentCourses}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          categories={categories}
          formatPrice={formatPrice}
        />
      </div>
    </section>
  );
};

export default Courses;
