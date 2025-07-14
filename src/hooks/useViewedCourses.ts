import { useState, useEffect, useCallback } from 'react';

export const VIEWED_COURSES_KEY = 'viewedCourses';

export const getViewedCourses = (): string[] => {
  const viewed = localStorage.getItem(VIEWED_COURSES_KEY);
  return viewed ? JSON.parse(viewed) : [];
};

export const addCourseToViewed = (courseId: string): void => {
  const viewedCourses = getViewedCourses();
  if (!viewedCourses.includes(courseId)) {
    const newViewed = [...viewedCourses, courseId];
    localStorage.setItem(VIEWED_COURSES_KEY, JSON.stringify(newViewed));
  }
};

export const useViewedCourses = () => {
  const [viewedIds, setViewedIds] = useState<string[]>([]);

  useEffect(() => {
    setViewedIds(getViewedCourses());
  }, []);

  const addViewed = useCallback((courseId: string) => {
    addCourseToViewed(courseId);
    setViewedIds(getViewedCourses());
  }, []);

  return { viewedIds, addViewed };
};