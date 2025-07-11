import type { Course } from "@/types/Course";
import { courses } from "@/data/courses";

const getCourses = async (): Promise<Course[]> => {
    try {
        const response = await new Promise<Course[]>((resolve) => {
            setTimeout(() => {
                resolve(courses);
            }, 1000);
        });
        return response;
    } catch (error) {
        throw new Error("Failed to fetch courses");
    }
}

export { getCourses }