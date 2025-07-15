import { useState, useEffect, useMemo } from 'react';
import type { Course } from '../types/Course';
import { courses as allCourses } from '../data/courses';
import CourseList from '../components/Course/CourseList';
import type { Category } from '@/types/Category';
import { categories as allCategories } from '@/data/categories';
import { useViewedCourses } from '@/hooks/useViewedCourses';

const ITEMS_PER_PAGE = 8;

const ViewedHistory = () => {
  const [viewedCourses, setViewedCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { viewedIds } = useViewedCourses();

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    const viewed = allCourses.filter(course => viewedIds.includes(course.id));
    setViewedCourses(viewed);
    setCurrentPage(1); // Reset to first page when viewed courses change
  }, [viewedIds]);

  const totalPages = Math.ceil(viewedCourses.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentCourses = useMemo(() => {
    return viewedCourses.slice(indexOfFirstItem, indexOfLastItem);
  }, [viewedCourses, indexOfFirstItem, indexOfLastItem]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
   };
 
   return (
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-8">Viewed History</h1>
       {viewedCourses.length > 0 ? (
         <CourseList
           courses={currentCourses}
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={handlePageChange}
           categories={categories}
           formatPrice={formatPrice}
         />
       ) : (
         <p>You haven't viewed any courses yet.</p>
       )}
     </div>
   );
 };

export default ViewedHistory;