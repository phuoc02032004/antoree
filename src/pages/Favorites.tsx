import { useState, useEffect, useMemo } from 'react';
import type { Course } from '../types/Course';
import { courses as allCourses } from '../data/courses';
import CourseList from '../components/Course/CourseList';
import type { Category } from '@/types/Category';
import { categories as allCategories } from '@/data/categories';
import { useFavorites } from '@/hooks/useFavorites';

const ITEMS_PER_PAGE = 8;

const Favorites = () => {
  const [favoriteCourses, setFavoriteCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { favoriteIds } = useFavorites();

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    const favorites = allCourses.filter(course => favoriteIds.includes(course.id));
    setFavoriteCourses(favorites);
    setCurrentPage(1); 
  }, [favoriteIds]);

  const totalPages = Math.ceil(favoriteCourses.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentCourses = useMemo(() => {
    return favoriteCourses.slice(indexOfFirstItem, indexOfLastItem);
  }, [favoriteCourses, indexOfFirstItem, indexOfLastItem]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
   };
 
   return (
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-8">My Favorite Courses</h1>
       {favoriteCourses.length > 0 ? (
         <CourseList
           courses={currentCourses}
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={handlePageChange}
           categories={categories}
           formatPrice={formatPrice}
         />
       ) : (
         <p>You haven't added any courses to your favorites yet.</p>
       )}
     </div>
   );
 };

export default Favorites;