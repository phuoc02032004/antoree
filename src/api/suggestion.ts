import type { Course } from "@/types/Course";
import { courses as allCourses } from "@/data/courses";
import { FAVORITES_KEY } from "@/hooks/useFavorites";

/**
 * Giả lập API lấy danh sách sản phẩm gợi ý.
 * Trong thực tế, bạn sẽ gọi API thật sự ở đây.
 * @param userId - ID của người dùng để lấy gợi ý
 */

import { VIEWED_COURSES_KEY } from "@/hooks/useViewedCourses";
const getSuggestion = async (userId: number) => {
  console.log(userId);
  try {
    const response = await new Promise<Course[]>((resolve) => {
      setTimeout(() => {
        const favoriteCourseIds =
          JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        const viewedCourseIds =
          JSON.parse(localStorage.getItem(VIEWED_COURSES_KEY) || "[]");

        const favoriteCourses = allCourses.filter((course) =>
          favoriteCourseIds.includes(course.id)
        );

        const viewedCourses = allCourses.filter(
          (course) =>
            viewedCourseIds.includes(course.id) &&
            !favoriteCourseIds.includes(course.id)
        );

        const suggestions = [...favoriteCourses, ...viewedCourses].slice(0, 3);
        resolve(suggestions);
      }, 1000);
    });
    return response;
  } catch (err) {
    console.error("Error get suggestion . . .", err);
    throw err;
  }
};

export { getSuggestion }