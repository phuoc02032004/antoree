import React, { useState } from 'react';
import chevronRight from '@/assets/icons/chevron-right-black.svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';
import CourseDetailModal from '@/components/Course/CourseDetailModal';

interface CourseListProps {
  courses: Course[];
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  categories: Category[];
  formatPrice: (price: number) => string;
}

const CourseList: React.FC<CourseListProps> = ({
  courses,
  currentPage,
  totalPages,
  onPageChange,
  categories,
  formatPrice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleReadMoreClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="group flex flex-col overflow-hidden rounded-2xl border-transparent bg-white shadow-sm
              transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer" 
            onClick={() => handleReadMoreClick(course)}
          >
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <CardContent className="flex flex-grow flex-col p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-full bg-[#FFEAE3] px-3 py-1 text-xs font-bold text-[#E5593F]">
                  {categories.find(cat => cat.id === course.category)?.name}
                </span>
              </div>
              <CardTitle className="font-sora text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#E5593F]">
                {course.title}
              </CardTitle>
              <p className="font-inter mt-3 flex-grow text-base text-gray-500">
                {course.description}
              </p>
              <p className="font-sora mt-2 text-lg font-bold text-gray-900">
                {formatPrice(course.price)}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-2">
              <div className="flex items-center text-base font-semibold text-[#FF6347] transition-colors duration-300 group-hover:text-[#E5593F]">
                Read more
                <img
                  src={chevronRight}
                  alt="arrow"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                onClick={() => onPageChange(page)}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  currentPage === page
                    ? 'bg-[#FF6347] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
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