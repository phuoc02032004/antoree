export interface Instructor {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Review {
  id: string;
  user: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  duration: number; 
  order: number;
  quiz?: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  price: number;
  discount?: number;
  rating: number;
  reviews: Review[];
  lessons: Lesson[];
  tags?: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  reviewsCount: number;
  whatYouWillLearn: string[];
  isFavorite?: boolean;
  progress?: number;
}