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

const ITEMS_PER_PAGE = 8;

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
          className="group relative bg-gradient-to-r from-[#E5593F] to-[#FF6B4A] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:transform-none disabled:shadow-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E5593F] to-[#FF6B4A] opacity-30 animate-pulse" />
          
          <div className="relative flex items-center justify-center gap-2">
            {isSuggesting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Finding Perfect Matches...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span>Get Smart Recommendations</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </div>
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E5593F] to-[#FF6B4A] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        </Button>
        
        <p className="mt-3 text-sm text-gray-600 font-medium">
          ✨ Discover products tailored just for you
        </p>
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
