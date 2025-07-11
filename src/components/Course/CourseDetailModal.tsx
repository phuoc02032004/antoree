import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, CheckCircle2, User, Tag, DollarSign, Clock, Users, Award } from 'lucide-react'; 
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  formatPrice: (price: number) => string;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  categories,
  formatPrice,
}) => {
  if (!course) {
    return null;
  }

  const categoryName = categories.find(cat => cat.id === course.category)?.name;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 bg-white dark:bg-gray-900 border-0 shadow-xl">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg">
          <div className="relative">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
            />
            
            {categoryName && (
              <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 border-0 shadow-sm">
                <Tag className="w-3 h-3 mr-1" />
                {categoryName}
              </Badge>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white/90 flex items-center mb-3">
                <User className="w-4 h-4 mr-2" />
                Giảng viên
              </h3>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 ring-2 ring-white/30">
                  <AvatarImage src={course.instructor.avatarUrl} alt={course.instructor.name} />
                  <AvatarFallback className="bg-blue-600 text-white font-bold">
                    {course.instructor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{course.instructor.name}</p>
                  <p className="text-sm text-blue-300">Expert in Web Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                {course.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300 mt-2">
                {course.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-2 mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <span className="font-bold text-lg text-yellow-600 dark:text-yellow-400">{course.rating.toFixed(1)}</span>
              <div className="flex gap-1">{renderStars(course.rating)}</div>
              <span className="text-sm text-gray-600 dark:text-gray-400">({course.reviewsCount})</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
                <Clock className="w-4 h-4 mx-auto text-blue-600 dark:text-blue-400 mb-1" />
                <p className="text-xs font-medium text-gray-800 dark:text-white">12h</p>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
                <Users className="w-4 h-4 mx-auto text-green-600 dark:text-green-400 mb-1" />
                <p className="text-xs font-medium text-gray-800 dark:text-white">1,234</p>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
                <Award className="w-4 h-4 mx-auto text-purple-600 dark:text-purple-400 mb-1" />
                <p className="text-xs font-medium text-gray-800 dark:text-white">Có</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800 dark:text-white">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                Bạn sẽ học được gì?
              </h3>
              <div className="space-y-2">
                {course.whatYouWillLearn.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
                {course.whatYouWillLearn.length > 3 && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 ml-6">
                    +{course.whatYouWillLearn.length - 3} mục khác...
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {formatPrice(course.price)}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Học mãi mãi</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Xem trước
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailModal;