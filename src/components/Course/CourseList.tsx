import React, { useState, useCallback, useMemo } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';
import CourseDetailModal from '@/components/Course/CourseDetailModal';
import { useFavorites } from '@/hooks/useFavorites';
import CourseListLoading from '@/components/Course/CourseListLoading';
import { toast } from 'sonner';
import { cn } from '@/lib/utils'; 

interface CourseListProps {
  courses: Course[];
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  categories: Category[];
  formatPrice: (price: number) => string;
  isLoading?: boolean;
}

const CourseList: React.FC<CourseListProps> = ({
  courses,
  currentPage,
  totalPages,
  onPageChange,
  categories,
  formatPrice,
  isLoading = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleReadMoreClick = useCallback((course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  }, []);

  const paginationItems = useMemo(() => {
    const pages = [];
    const pageLimit = 2; 
    const showEllipsis = totalPages > 5;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > pageLimit + 1) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - pageLimit) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);


  if (isLoading) {
    return <CourseListLoading />;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            onClick={() => handleReadMoreClick(course)}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border
             border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-orange-400 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={course.thumbnailUrl}
                alt={course.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/50 text-orange-600
                 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  const isCurrentlyFavorite = isFavorite(course.id);
                  toggleFavorite(course.id);
                  if (isCurrentlyFavorite) {
                    toast.success(`Removed '${course.title}' from favorites!`);
                  } else {
                    toast.success(`Added '${course.title}' to favorites!`);
                  }
                }}
              >
                <Heart className={cn('h-5 w-5', isFavorite(course.id) && 'fill-red-500 text-red-500')} />
              </Button>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <CardContent className="flex flex-1 flex-col p-0">
                <div className="mb-3">
                  <span className="rounded-md bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-800">
                    {categories.find(cat => cat.id === course.category)?.name || 'Uncategorized'}
                  </span>
                </div>
                <CardTitle className="font-sora text-lg font-bold text-slate-800 transition-colors group-hover:text-orange-600">
                  {course.title}
                </CardTitle>
                <p className="font-inter mt-2 text-sm text-slate-600 line-clamp-3 flex-grow min-h-[4.5rem]">
                  {course.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto w-full items-center justify-between p-0 pt-4">
                <p className="font-sora text-xl font-bold text-slate-900">
                  {formatPrice(course.price)}
                </p>
                <div className="flex items-center text-sm font-semibold text-orange-600">
                  View Details
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-9 w-9"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {paginationItems.map((page, index) =>
              typeof page === 'number' ? (
                <Button
                  key={`${page}-${index}`}
                  onClick={() => onPageChange(page)}
                  className={cn(
                    'h-9 w-9',
                    currentPage === page
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  )}
                  variant={currentPage === page ? 'default' : 'outline'}
                >
                  {page}
                </Button>
              ) : (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              )
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-9 w-9"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}

      <CourseDetailModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        categories={categories}
        formatPrice={formatPrice}
      />
    </>
  );
};

export default CourseList;