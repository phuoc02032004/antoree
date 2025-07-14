import React from 'react';
import { CustomSkeleton } from '@/components/Course/CustomSkeleton';

const CourseCardSkeleton: React.FC = () => (
  <div className="flex flex-col overflow-hidden rounded-2xl border-transparent bg-white shadow-sm">
    <CustomSkeleton className="h-56 w-full" />
    <div className="flex flex-col flex-grow p-6">
      <div className="mb-4 flex items-center gap-4">
        <CustomSkeleton className="h-6 w-20 rounded-full" />
      </div>
      <CustomSkeleton className="h-6 w-3/4 mb-2" />
      <CustomSkeleton className="h-4 w-full mt-3" />
      <CustomSkeleton className="h-4 w-2/3 mt-1" />
      <CustomSkeleton className="h-6 w-1/3 mt-2" />
    </div>
    <div className="p-6 pt-2">
      <CustomSkeleton className="h-6 w-24" />
    </div>
  </div>
);

const CourseListLoading: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <CourseCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CourseListLoading;