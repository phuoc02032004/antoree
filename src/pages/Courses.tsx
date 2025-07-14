import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CourseFilter from '@/components/Course/CourseFilter';
import CourseList from '@/components/Course/CourseList';
import { getCourses } from '@/api/course';
import { getCategories } from '@/api/category';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';
import { getSuggestion } from '@/api/suggestion';
import Loading from '@/components/Loading/Loading';

const ITEMS_PER_PAGE = 6;

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('View All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('default'); 
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [suggestion, setSuggestion] = useState<Course[]>([]);
  const [suggestionError, setSuggestionError] = useState<string | null>(null);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialDataError, setInitialDataError] = useState<string | null>(null);


  const handleSuggestClick = async () => {
    setIsSuggesting(true);
    setSuggestion([]);
    setSuggestionError(null);
    try {
      const response = await getSuggestion(1);
      setSuggestion(response);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestionError('Can not get hints at this time');
    } finally {
      setIsSuggesting(false);
    }
  };

  useEffect(() => {
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

    fetchInitialData();
  }, []);

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

        <div className="mb-8 text-center">
          <Button
            onClick={handleSuggestClick}
            disabled={isSuggesting}
            className="bg-[#E5593F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400"
          >
            {isSuggesting ? 'Đang tìm gợi ý...' : 'Gợi ý sản phẩm phù hợp'}
          </Button>
        </div>

        {suggestionError && (
          <p className="text-center text-red-500 mb-4">{suggestionError}</p>
        )}
        {isSuggesting && <Loading />}
        {!isSuggesting && suggestion.length > 0 && (
          <div className="mb-12">
            <h2 className="font-sora text-3xl font-bold tracking-tight text-gray-900 md:text-4xl mb-8 text-center">
              Dành cho bạn
            </h2>
            <CourseList
              courses={suggestion}
              currentPage={1}
              totalPages={1}
              onPageChange={() => {}}
              categories={categories}
              formatPrice={formatPrice}
              isLoading={false}
            />
          </div>
        )}

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

export default Courses;
