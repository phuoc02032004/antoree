import type { Course } from './Course';

export interface CartItem {
  course: Course;
  quantity: number;
}